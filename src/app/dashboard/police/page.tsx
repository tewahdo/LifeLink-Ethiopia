"use client";

import React, { useEffect, useState } from "react";

interface Officer {
  id: string;
  name: string;
  badgeNumber: string;
  rank: string;
}

interface Incident {
  id: string;
  incidentType: string;
  description: string;
  location: string;
  status: string;
  reportedAt: string;
  officer?: Officer | null;
}

export default function PoliceDashboardPage() {
  const [incidents, setIncidents] = useState<Incident[]>([]);
  const [officers, setOfficers] = useState<Officer[]>([]);
  const [loadingIncidents, setLoadingIncidents] = useState(true);
  const [loadingOfficers, setLoadingOfficers] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchIncidents() {
      try {
        const res = await fetch("/api/police/incidents");
        if (!res.ok) throw new Error("Failed to fetch incidents");
        const data = await res.json();
        setIncidents(data);
      } catch (e) {
        setError((e as Error).message);
      } finally {
        setLoadingIncidents(false);
      }
    }

    async function fetchOfficers() {
      try {
        const res = await fetch("/api/police/officers");
        if (!res.ok) throw new Error("Failed to fetch officers");
        const data = await res.json();
        setOfficers(data);
      } catch (e) {
        setError((e as Error).message);
      } finally {
        setLoadingOfficers(false);
      }
    }

    fetchIncidents();
    fetchOfficers();
  }, []);

  if (error) {
    return <div className="p-6 text-red-600">Error: {error}</div>;
  }

  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold mb-6">Police Dashboard</h1>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Incident Reports</h2>
        {loadingIncidents ? (
          <div>Loading incident reports...</div>
        ) : incidents.length === 0 ? (
          <div>No incidents found.</div>
        ) : (
          <ul className="space-y-4 max-w-3xl">
            {incidents.map((incident) => (
              <li key={incident.id} className="p-4 border rounded shadow-sm">
                <div className="font-semibold">{incident.incidentType}</div>
                <div className="text-sm text-gray-600 mb-2">{incident.description}</div>
                <div>
                  <span className="font-medium">Location:</span> {incident.location}
                </div>
                <div>
                  <span className="font-medium">Status:</span>{" "}
                  <span
                    className={`font-semibold ${
                      incident.status === "resolved"
                        ? "text-green-600"
                        : incident.status === "in_progress"
                        ? "text-yellow-600"
                        : "text-red-600"
                    }`}
                  >
                    {incident.status}
                  </span>
                </div>
                <div>
                  <span className="font-medium">Reported At:</span>{" "}
                  {new Date(incident.reportedAt).toLocaleString()}
                </div>
                <div>
                  <span className="font-medium">Assigned Officer:</span>{" "}
                  {incident.officer ? incident.officer.name : "Unassigned"}
                </div>
              </li>
            ))}
          </ul>
        )}
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-4">Police Officers</h2>
        {loadingOfficers ? (
          <div>Loading police officers...</div>
        ) : officers.length === 0 ? (
          <div>No officers found.</div>
        ) : (
          <ul className="space-y-2 max-w-3xl">
            {officers.map((officer) => (
              <li key={officer.id} className="p-2 border rounded">
                <div className="font-semibold">{officer.name}</div>
                <div className="text-sm text-gray-600">
                  Badge#: {officer.badgeNumber} | Rank: {officer.rank}
                </div>
              </li>
            ))}
          </ul>
        )}
      </section>
    </main>
  );
}
