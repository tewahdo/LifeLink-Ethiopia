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

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/tewahdo/lifelink-ethiopia.git

# Navigate into the project directory
cd lifelink-ethiopia

# Install dependencies
npm install

# Start the development server
npm run dev
