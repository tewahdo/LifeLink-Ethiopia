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

   #Database 
DATABASE_URL=postgresql://your_db_user:your_db_password@your-db-host/dbname?sslmode=require
#Auth
NEXTAUTH_SECRET=your_nextauth_secret
NEXTAUTH_URL=http://localhost:3000


   Create a .env.local file in the project root with:  
NEXT_PUBLIC_CLIENT_ID=your_fayda_client_id
NEXT_PUBLIC_REDIRECT_URI=http://localhost:3000/callback
NEXT_PUBLIC_AUTHORIZATION_ENDPOINT=https://esignet.ida.fayda.et/authorize
NEXT_PUBLIC_TOKEN_ENDPOINT=https://esignet.ida.fayda.et/v1/esignet/oauth/v2/token
NEXT_PUBLIC_USERINFO_ENDPOINT=https://esignet.ida.fayda.et/v1/esignet/oidc/userinfo
EXPIRATION_TIME=15
ALGORITHM=RS256
CLIENT_ASSERTION_TYPE=urn:ietf:params:oauth:client-assertion-type:jwt-bearer
PRIVATE_KEY="your_private_key_here"

   

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


