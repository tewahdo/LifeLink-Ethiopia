
import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import axios from "axios"
import jwt from "jsonwebtoken"
import jwkToPem from "jwk-to-pem"

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: "FaydaID",
      credentials: {
        code: { label: "Fayda Code", type: "text" },
      },
      async authorize(credentials) {
        if (!credentials?.code) {
          throw new Error("Missing Fayda code")
        }

        // Decode base64 JWK and convert to PEM
        const jwkJson = JSON.parse(
          Buffer.from(process.env.PRIVATE_KEY || "", "base64").toString("utf-8")
        )
        const pemPrivateKey = jwkToPem(jwkJson, { private: true })

        // Build client_assertion JWT payload
        const now = Math.floor(Date.now() / 1000)
        const payload = {
          iss: process.env.NEXT_PUBLIC_CLIENT_ID,
          sub: process.env.NEXT_PUBLIC_CLIENT_ID,
          aud: process.env.NEXT_PUBLIC_TOKEN_ENDPOINT,
          jti: Math.random().toString(36).substring(2) + now.toString(36),
          exp: now + 15 * 60, // expires in 15 mins
        }

        // Sign JWT
        const clientAssertion = jwt.sign(payload, pemPrivateKey, {
          algorithm: "RS256",
          keyid: jwkJson.kid,
        })

        // Prepare token request data
        const params = new URLSearchParams()
        params.append("grant_type", "authorization_code")
        params.append("code", credentials.code)
        params.append("redirect_uri", process.env.NEXT_PUBLIC_REDIRECT_URI || "")
        params.append("client_id", process.env.NEXT_PUBLIC_CLIENT_ID || "")
        params.append("client_assertion_type", process.env.CLIENT_ASSERTION_TYPE || "")
        params.append("client_assertion", clientAssertion)
        params.append("code_verifier", "") // add if you use PKCE, else empty

        try {
          const response = await axios.post(
            process.env.NEXT_PUBLIC_TOKEN_ENDPOINT || "",
            params.toString(),
            {
              headers: {
                "Content-Type": "application/x-www-form-urlencoded",
              },
            }
          )

          const { access_token, id_token } = response.data

          // Optionally fetch user info here using access_token

          // Return user session object for NextAuth
          return {
            id: "fayda-user",
            name: "Fayda User",
            email: null,
            accessToken: access_token,
            idToken: id_token,
          }
        } catch (error: any) {
          console.error("Fayda auth error:", error)
          throw new Error("Login failed. Invalid Fayda code.")
        }
      },
    }),
  ],

  callbacks: {
    async session({ session, token }) {
      // Add tokens or custom info to session here if needed
      return session
    },
  },

  // Add your secret here if needed
  secret: process.env.NEXTAUTH_SECRET,
})
