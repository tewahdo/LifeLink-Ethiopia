import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "@/lib/prisma";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const userId = req.query.userId as string;

  if (req.method === "GET") {
    try {
      const accounts = await prisma.telecomAccount.findMany({
        where: { userId },
        include: {
          callRecords: { take: 5, orderBy: { date: "desc" } },
        },
      });
      return res.status(200).json(accounts);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Failed to fetch telecom accounts" });
    }
  } else {
    res.setHeader("Allow", ["GET"]);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
