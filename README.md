5. Tailwind CSS Setup (if using Tailwind)

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

## 📄 License

MIT
