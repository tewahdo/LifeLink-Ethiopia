// src/app/api/immigration/route.ts (App Router)
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  const records = await prisma.immigrationStatus.findMany({
    include: { user: true },
  });
  return NextResponse.json(records);
}

export async function POST(req: Request) {
  const body = await req.json();
  const record = await prisma.immigrationStatus.create({
    data: {
      userId: body.userId,
      visaType: body.visaType,
      status: body.status,
    },
  });
  return NextResponse.json(record);
}
