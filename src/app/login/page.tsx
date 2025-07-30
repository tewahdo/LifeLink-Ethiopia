'use client';

export default function LoginPage() {
  const handleFaydaLogin = () => {
    const state = Math.random().toString(36).substring(2);
    const params = new URLSearchParams({
      client_id: process.env.NEXT_PUBLIC_CLIENT_ID!,
      response_type: 'code',
      scope: 'openid',
      redirect_uri: process.env.NEXT_PUBLIC_REDIRECT_URI!,
      state,
    });

    window.location.href = `${process.env.NEXT_PUBLIC_AUTHORIZATION_ENDPOINT}?${params.toString()}`;
  };

  return (
    <div className="container">
      <h1 className="title">Login with Fayda</h1>
      <button className="faydaButton" onClick={handleFaydaLogin}>
        Sign in with FaydaID
      </button>

      <style jsx>{`
        .container {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          min-height: 100vh;
          background-color: #f9fafb; /* gray-50 */
        }

        .title {
          font-size: 1.875rem;
          font-weight: bold;
          margin-bottom: 1.5rem;
          color: #1f2937; /* gray-800 */
        }

        .faydaButton {
          background-color: #2563eb; /* blue-600 */
          color: white;
          padding: 0.75rem 2rem;
          border-radius: 0.5rem;
          font-weight: 600;
          transition: background-color 0.3s ease;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          outline: none;
          border: none;
          cursor: pointer;
        }

        .faydaButton:hover {
          background-color: #1e40af; /* blue-800 */
        }

        .faydaButton:focus {
          box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.5); /* blue-500 ring */
        }
      `}</style>
    </div>
  );
}
