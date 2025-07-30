
"use client";
import { useEffect, useState } from "react";

export default function ImmigrationDashboard() {
  const [data, setData] = useState([]);
  const [form, setForm] = useState({ userId: "", visaType: "", status: "" });

  useEffect(() => {
    fetch("/api/immigration")
      .then((res) => res.json())
      .then(setData);
  }, []);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    await fetch("/api/immigration", {
      method: "POST",
      body: JSON.stringify(form),
    });
    window.location.reload();
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Immigration Dashboard</h1>

      <form onSubmit={handleSubmit} className="mb-4 space-y-2">
        <input
          type="text"
          placeholder="User ID"
          value={form.userId}
          onChange={(e) => setForm({ ...form, userId: e.target.value })}
          className="border p-2 w-full"
        />
        <input
          type="text"
          placeholder="Visa Type"
          value={form.visaType}
          onChange={(e) => setForm({ ...form, visaType: e.target.value })}
          className="border p-2 w-full"
        />
        <input
          type="text"
          placeholder="Status"
          value={form.status}
          onChange={(e) => setForm({ ...form, status: e.target.value })}
          className="border p-2 w-full"
        />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2">
          Add Immigration Record
        </button>
      </form>

      <ul>
        {data.map((record: any) => (
          <li key={record.id} className="border p-2 my-2">
            <strong>{record.visaType}</strong> - {record.status} (User ID: {record.userId})
          </li>
        ))}
      </ul>
    </div>
  );
}
