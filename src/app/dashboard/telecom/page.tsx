"use client";

import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

type CallRecord = {
  id: string;
  callType: string;
  duration: number;
  date: string;
};

type TelecomAccount = {
  id: string;
  providerName: string;
  phoneNumber: string;
  balance: number;
  callRecords: CallRecord[];
};

export default function TelecomDashboard() {
  const { data: session, status } = useSession();
  const [accounts, setAccounts] = useState<TelecomAccount[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (status !== "authenticated") return;

    const userId = session?.user?.id;

    if (!userId) {
      setError("User ID not found in session");
      setLoading(false);
      return;
    }

    async function fetchAccounts() {
      try {
        setLoading(true);
        const res = await fetch(`/api/telecom/accounts/${userId}`);
        if (!res.ok) throw new Error("Failed to fetch telecom accounts");
        const data: TelecomAccount[] = await res.json();
        setAccounts(data);
        setError(null);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchAccounts();
  }, [session, status]);

  if (status === "loading") return <p>Loading session...</p>;
  if (error) return <p className="text-red-600">Error: {error}</p>;
  if (!accounts.length) return <p>No telecom accounts found.</p>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Telecom Dashboard</h1>

      {accounts.map((account) => (
        <div key={account.id} className="mb-6 p-4 border rounded shadow-sm bg-white">
          <h2 className="text-xl font-semibold">
            {account.providerName} - {account.phoneNumber}
          </h2>
          <p className="mb-2">Balance: ${account.balance.toFixed(2)}</p>

          <h3 className="font-semibold mb-2">Recent Call Records:</h3>
          {account.callRecords.length === 0 && <p>No call records found.</p>}
          <ul className="list-disc list-inside">
            {account.callRecords.map((call) => (
              <li key={call.id}>
                {call.callType} - {Math.floor(call.duration / 60)}m {call.duration % 60}s -{" "}
                {new Date(call.date).toLocaleDateString()}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
