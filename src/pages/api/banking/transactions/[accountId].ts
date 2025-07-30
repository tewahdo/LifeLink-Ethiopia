// /src/pages/api/banking/transactions/[accountId].ts
import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "@/lib/prisma";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const accountId = req.query.accountId as string;

  if (req.method === "GET") {
    try {
      const transactions = await prisma.bankTransaction.findMany({
        where: { accountId },
        orderBy: { date: "desc" },
        take: 20,
      });
      return res.status(200).json(transactions);
    } catch (error) {
      console.error("Failed to fetch transactions:", error);
      return res.status(500).json({ error: "Failed to fetch transactions" });
    }
  } else {
    res.setHeader("Allow", ["GET"]);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
