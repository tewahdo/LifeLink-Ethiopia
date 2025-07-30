import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "@/lib/prisma";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    try {
      const incidents = await prisma.incidentReport.findMany({
        include: { officer: true },
        orderBy: { reportedAt: "desc" },
      });
      return res.status(200).json(incidents);
    } catch (error) {
      console.error("Failed to fetch incidents:", error);
      return res.status(500).json({ error: "Failed to fetch incidents" });
    }
  }

  res.setHeader("Allow", ["GET"]);
  res.status(405).end(`Method ${req.method} Not Allowed`);
}
