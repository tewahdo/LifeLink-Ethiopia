"use client";

import { useEffect, useState } from "react";

type BankTransaction = {
  id: string;
  type: string;
  amount: number;
  description?: string;
  date: string;
};

type BankAccount = {
  id: string;
  bankName: string;
  accountNumber: string;
  balance: number;
  transactions: BankTransaction[];
};

export default function BankingDashboard() {
  const [accounts, setAccounts] = useState<BankAccount[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const userId = "your-user-id"; 

  useEffect(() => {
    async function fetchAccounts() {
      try {
        setLoading(true);
        const res = await fetch(`/api/banking/accounts/${userId}`);
        if (!res.ok) throw new Error("Failed to fetch bank accounts");
        const data: BankAccount[] = await res.json();
        setAccounts(data);
        setError(null);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchAccounts();
  }, [userId]);

  if (loading) return <p>Loading bank accounts...</p>;
  if (error) return <p className="text-red-600">Error: {error}</p>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Banking Dashboard</h1>

      {accounts.length === 0 && <p>No bank accounts found.</p>}

      {accounts.map((account) => (
        <div
          key={account.id}
          className="mb-6 p-4 border rounded shadow-sm bg-white"
        >
          <h2 className="text-xl font-semibold">
            {account.bankName} - {account.accountNumber}
          </h2>
          <p className="mb-2">Balance: ${account.balance.toFixed(2)}</p>

          <h3 className="font-semibold mb-2">Recent Transactions:</h3>
          {account.transactions.length === 0 && <p>No transactions found.</p>}
          <ul className="list-disc list-inside">
            {account.transactions.map((tx) => (
              <li key={tx.id}>
                {tx.type} - ${tx.amount.toFixed(2)}{" "}
                {tx.description ? `(${tx.description})` : ""} -{" "}
                {new Date(tx.date).toLocaleDateString()}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
