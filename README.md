# LifeLink Ethiopia 🌍

LifeLink Ethiopia is a full-stack national dashboard platform designed to unify Ethiopia's essential services through Fayda ID, the country's official digital identity system. This project connects healthcare, education, banking, telecom, immigration, and more—empowering citizens to manage their life journey through one secure digital profile, while institutions streamline service delivery using verified dashboards.

---

## 🧑‍💻 Contributors
- Ebisse Fantahun
- Meskerem tolossa
- Samuel wondimu

---

## 📜 Project Synopsis

### 🔍 Problem Statement
Ethiopian citizens interact with a wide range of public and private services—healthcare, education, banking, telecom, immigration, and legal systems. These services operate in isolation, creating inefficiencies, lost records, long wait times, and limited access to real-time data. There is no single digital platform for citizens to manage their life journey or for institutions to coordinate services effectively.

### 💡 Planned Solution
LifeLink Ethiopia is a full-stack national dashboard ecosystem that unifies Ethiopia’s core services through Fayda ID, the country’s digital identity system. With LifeLink:
- Citizens access all services using a secure digital profile
- Institutions streamline service delivery through role-based dashboards
- Admins gain national insights for smarter policymaking

The platform includes modules like:
- User Profile Dashboard (goals, routines, preferences, records)
- Healthcare Dashboard (patient records, appointments, analytics)
- Banking & Finance (linked accounts, budget tools, KYC verification)
- Telecom Management (SIM card logs, fraud alerts, usage stats)
- Immigration & Legal (travel docs, legal records, mobility logs)
- Police & Safety (incident reporting, officer tracking, crime analytics)

### 🎯 Expected Outcome
A secure, user-centered MVP that demonstrates how Fayda ID can:
- Empower individuals to manage their life digitally
- Enable interoperability across sectors
- Strengthen national service delivery and citizen trust

LifeLink envisions a future where one verified identity = full national access.

### 🪪 Fayda's Role
Fayda ID is the core identity layer behind LifeLink Ethiopia:
- Used for authentication and profile verification
- Enables secure role-based access to sector dashboards
- Acts as a trust anchor for national interoperability
- Powers 2FA, emergency recovery, and biometric matching

---

## 🧰 Tech Stack

| Layer           | Tools & Technologies                          |
|----------------|------------------------------------------------|
| Frontend        | Next.js, TypeScript, Tailwind CSS             |
| Backend         | Node.js, Express.js, RESTful API              |
| Database        | PostgreSQL (via Prisma ORM)                   |
| Authentication  | NextAuth.js + Fayda ID mock integration       |
| Visualization   | Chart.js (health & usage trends)              |
| Deployment      | Vercel (planned)                              |
| Testing         | Postman                                       |
| Security        | Role-based access, 2FA, encryption             |

---

## 📦 Installation and Deployment

### Running Locally

```bash
git clone https://github.com/yourusername/lifelink-ethiopia.git
cd lifelink-ethiopia
npm install
# create .env.local with your environment variables
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000)

---

### Docker Deployment

```bash
docker-compose build
docker-compose up
```

Your app will run on [http://localhost:3000](http://localhost:3000)


---

## 🚀 Installation & Setup

1. Clone the repository

      git clone https://github.com/tewahdo/lifelink-ethiopia.git
   cd lifelink-ethiopia
   

2. Install dependencies

      npm install
   

3. Configure environment
   Create a .env with
   DATABASE_URL=postgresql://neondb_owner:npg_f1D7JcpyWTjk@ep-quiet-tooth-adgubbbl-pooler.c-2.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require
NEXTAUTH_SECRET=b435804a0674c1432a6188483f03af93fe8e60d34483e2562564bb117d0047a5
NEXTAUTH_URL=http://localhost:3000

   Create a .env.local file in the project root with:  
NEXT_PUBLIC_CLIENT_ID=crXYIYg2cJiNTaw5t-peoPzCRo-3JATNfBd5A86U8t0
NEXT_PUBLIC_REDIRECT_URI=http://localhost:3000/callback
NEXT_PUBLIC_AUTHORIZATION_ENDPOINT=https://esignet.ida.fayda.et/authorize
NEXT_PUBLIC_TOKEN_ENDPOINT=https://esignet.ida.fayda.et/v1/esignet/oauth/v2/token
NEXT_PUBLIC_USERINFO_ENDPOINT=https://esignet.ida.fayda.et/v1/esignet/oidc/userinfo
EXPIRATION_TIME=15
ALGORITHM=RS256
CLIENT_ASSERTION_TYPE=urn:ietf:params:oauth:client-assertion-type:jwt-bearer
PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDA7A9e42Qp3qfG\n+T2HgMrEBM6WffEYm8SgAk7qBWcZHYFzxN0kVG+y6J4RifvxPjJZRzx3A0TTCkax\n4OJep7XtFlOb6iQifXzzSLs+EwRc3pPvGx+8I68y8EoZ5Syv7WtO3P4oM+GZ4e2A\nx5Snc3k8bmUw6d/bZaqk2UxkkKvTHKeZr1m7rhtWqW5q+5EO9g68xqgLBMZqQkId\nx71ra+a24MIBl2EzoVKH+9tpi0guDAXeayP3Q9z27zgjv/F3LqFwHdOSZZDBM55f\nY8lhxHkqWBl0u9/Q6roH4D3hxzHRz/7L6mrO8cA5uQ9x3J6u/DW+9UIkyqz6N4Re\nAgMBAAECggEAQnoSi+SR8GFa8r2KUfJsZxEGDNPb7I91jY9DQrfq6xnTjhwln6Xt\n7IpRQk1n7szjN1XZ9Dr7HqOiDmw3deD8Yk+nT4LZkc4I5M0KhYYr9Io4/jBg5jy7\nKCd/ZnNbyEG3bK8m3yIqcy6Zs9O0uV3D7EmFf51Ee9pp33qv0+S4lLRQkUIA4Fp7\npziEvY7Qp7Pc3vpoL7d+oK6mP/N9C7pj6nA1+uqMgOGtE2p0Y+Nf+SCMlSPTWm5j\nsyfN/PHq0NoEdqpzUuzcgMG5DdYVb6jTOmtH4+tqlDl6hP+tK+P6SvUKOY/ljw8+\nUwKBgQDxS39/5GkMd7BkPcaxgrU65xuF9F4jOpCZ8m6V/CWJ7xhvv9KMmMnwfhIA\n1YwFG0LCKEjHCp0o7T2H2joUkRPKMCOprZcYqkUapAzYFSZRjTWp7m1t9wER0IxX\nOwFkU7e+2Mwv1c4HlF2uQzU3bdHIVu9+w8tZd0MsUolQAAQKBgQDRztw7Mb2CKrf\n5zpoAGD+0LhsdnjIc9oRV9qP0j9f4kko7ByTwP8T7hF8K6lWlszCUIOeR6JS72SI\nvIu9e+XDDHOBTXsZtQChGxzXNK1wYvZ5Hz7nFy5NY2gFbZgxOh13Eo9RucQuzYc+\n+PwKBgQDjtdjapA1tpb8a4Vv6YDjSCQwwHqZjogILJUHPGCRw8E+r9+p4smHkY1F\n8pRT3KlErlB4rSjoT5hE0L5HbnLMuR/CtOvv2/Z2jJp36u0CsOhnx/y6nJoZaSov\nrO6LEuUnm8Uw8jRbmksPZTQvQEgF86KlNfbkz4rI5Y2knJAf9QKBgEAD/wEfXHjL\nvBj3XN2/T7Ck3+JJuc7b6lDUqZRt8/cPQG4czxdCt1dr7EB60vTsftZ3KcB7PqvH\n78SnkJAOG3k/V0a/6hBvj9tyV0FEoL9i6HpjCqgS2GV84VqUkRpoGwY7hP3mr7Ax\n+ShxvA8Nj4XHcHIlAoGBAL5woP5JhKW8Y2WqdzQZBX10QIVP8QqRJtDjqkMqXGkm\nULVkMLNNEt8F8Rd0En53W6H2s9x9vMLh8qnvPSbRtpJf66jXrGexDEWcswO4TXs1\nN8TSGuEYVqVwAoH6q9avzXbG0wF2gK3Cxr9mNKLTku3X+aRHzRfvA6Mdpo7lKUx9\n-----END PRIVATE KEY-----"

   

5. Prisma Migrations

      npx prisma migrate dev --name init
   npx prisma generate


5. Tailwind CSS Setup 

      npm install -D tailwindcss postcss autoprefixer
   npx tailwindcss init -p
   

   Ensure your tailwind.config.js has:

      module.exports = {
     content: ['./src/app/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
     theme: { extend: {} },
     plugins: [],
   }
   

   And src/app/globals.css contains:

      @tailwind base;
   @tailwind components;
   @tailwind utilities;
   

6. Run the development server

      npm run dev
   

Open [http://localhost:3000](http://localhost:3000) to view in browser.

---

## 🔧 Usage

* Login: Navigate to /login, select OTP or Biometrics, enter your FAN, then you'll be redirected back to the dashboard.
* Navigate: Use the Navbar to switch between Home, User, Health, Banking, Telecom, Immigration, and Police dashboards.

---

## 🌐 API Routes

* GET /api/healthcare/[userId]
* GET /api/banking/accounts/[userId]
* GET /api/telecom/accounts/[userId]
* GET /api/police/incidents
* GET /api/police/officers

---

## 🛡 Security & Authentication

* Fayda OIDC: eSignet integration with Authorization Code Flow and client\_assertion JWT
* NextAuth.js: wraps custom provider for Fayda
* Role-based access: middleware protects /dashboard/* routes

---

## 📈 Future Enhancements

* Add Chart.js visualizations for crime stats, financial trends
* Implement data creation/edit forms for incidents, transactions
* Mobile-responsive Navbar with hamburger menu
* Deeper integration with additional services (education, legal)

---


