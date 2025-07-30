'use client';

import { useEffect, useState } from 'react';

export default function CallbackPage() {
  const [userInfo, setUserInfo] = useState<any>(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchTokenAndUser = async () => {
      const urlParams = new URLSearchParams(window.location.search);
      const code = urlParams.get('code');

      if (!code) {
        setError('No code received from Fayda');
        return;
      }

      try {
        const tokenRes = await fetch(process.env.NEXT_PUBLIC_TOKEN_ENDPOINT!, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: new URLSearchParams({
            grant_type: 'authorization_code',
            code,
            client_id: process.env.NEXT_PUBLIC_CLIENT_ID!,
            redirect_uri: process.env.NEXT_PUBLIC_REDIRECT_URI!,
          }),
        });

        const tokenData = await tokenRes.json();

        if (!tokenData.access_token) {
          setError('Token exchange failed');
          return;
        }

        const userInfoRes = await fetch(process.env.NEXT_PUBLIC_USERINFO_ENDPOINT!, {
          headers: {
            Authorization: `Bearer ${tokenData.access_token}`,
          },
        });

        const user = await userInfoRes.json();
        setUserInfo(user);
      } catch (err: any) {
        console.error(err);
        setError('Something went wrong during login');
      }
    };

    fetchTokenAndUser();
  }, []);

  if (error) {
    return <div className="p-10 text-red-600">Error: {error}</div>;
  }

  if (!userInfo) {
    return <div className="p-10">Logging in with Fayda...</div>;
  }

  return (
    <div className="p-10">
      <h2 className="text-xl font-bold mb-4">Welcome, {userInfo.name || 'User'}!</h2>
      <pre className="bg-gray-100 p-4 rounded">{JSON.stringify(userInfo, null, 2)}</pre>
    </div>
  );
}
