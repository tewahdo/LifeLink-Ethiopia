import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "@/lib/prisma";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    try {
      const officers = await prisma.policeOfficer.findMany({
        orderBy: { name: "asc" },
      });
      return res.status(200).json(officers);
    } catch (error) {
      console.error("Failed to fetch officers:", error);
      return res.status(500).json({ error: "Failed to fetch officers" });
    }
  }

  res.setHeader("Allow", ["GET"]);
  res.status(405).end(`Method ${req.method} Not Allowed`);
}
