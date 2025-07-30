'use client'

import { useSession, signIn, signOut } from "next-auth/react"

export default function HomePage() {
  const { data: session, status } = useSession()

  if (status === "loading") {
    return (
      <div style={{ padding: "4rem", fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif", textAlign: "center", fontSize: "1.2rem" }}>
        
      </div>
    )
  }

  return (
    <main
      style={{
        minHeight: "100vh",
        padding: "3rem",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        background: "linear-gradient(135deg, #00aaff 0%, #0044cc 100%)",
        color: "#fff",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        gap: "1.5rem",
      }}
    >
      <h1 style={{ fontSize: "3rem", marginBottom: "0.5rem" }}>👋 Welcome to LifeLink Ethiopia</h1>
      <p style={{ fontSize: "1.25rem", maxWidth: "480px", marginBottom: "2rem", fontWeight: "500" }}>
        Your national dashboard platform, powered by Fayda ID for secure access to essential services.
      </p>

      {session ? (
        <section
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.15)",
            padding: "1.5rem 2rem",
            borderRadius: "10px",
            boxShadow: "0 0 15px rgba(0,0,0,0.3)",
            maxWidth: "400px",
            width: "100%",
          }}
        >
          <p style={{ fontSize: "1.15rem", marginBottom: "1rem" }}>
            Logged in as <strong>{session.user?.name || session.user?.email}</strong>
          </p>
          <button
            onClick={() => signOut()}
            style={{
              backgroundColor: "#ff4d4f",
              color: "#fff",
              border: "none",
              padding: "0.75rem 1.5rem",
              borderRadius: "6px",
              cursor: "pointer",
              fontWeight: "600",
              fontSize: "1rem",
              transition: "background-color 0.3s ease",
            }}
            onMouseEnter={e => (e.currentTarget.style.backgroundColor = "#e63946")}
            onMouseLeave={e => (e.currentTarget.style.backgroundColor = "#ff4d4f")}
          >
            Sign Out
          </button>
        </section>
      ) : (
        <button
          onClick={() => signIn("fayda")}
          style={{
            backgroundColor: "#00ffab",
            color: "#004d40",
            border: "none",
            padding: "0.75rem 2rem",
            borderRadius: "8px",
            fontWeight: "700",
            fontSize: "1.25rem",
            cursor: "pointer",
            boxShadow: "0 6px 12px rgba(0, 255, 171, 0.5)",
            transition: "transform 0.2s ease, box-shadow 0.2s ease",
          }}
          onMouseEnter={e => {
            e.currentTarget.style.transform = "scale(1.05)";
            e.currentTarget.style.boxShadow = "0 8px 16px rgba(0, 255, 171, 0.75)";
          }}
          onMouseLeave={e => {
            e.currentTarget.style.transform = "scale(1)";
            e.currentTarget.style.boxShadow = "0 6px 12px rgba(0, 255, 171, 0.5)";
          }}
        >
          Login with Fayda ID
        </button>
      )}
    </main>
  )
}
