-- CreateTable
CREATE TABLE "public"."TelecomAccount" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "providerName" TEXT NOT NULL,
    "phoneNumber" TEXT NOT NULL,
    "balance" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "TelecomAccount_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."CallRecord" (
    "id" TEXT NOT NULL,
    "telecomAccountId" TEXT NOT NULL,
    "callType" TEXT NOT NULL,
    "duration" INTEGER NOT NULL,
    "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "CallRecord_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "TelecomAccount_userId_idx" ON "public"."TelecomAccount"("userId");

-- CreateIndex
CREATE INDEX "CallRecord_telecomAccountId_idx" ON "public"."CallRecord"("telecomAccountId");

-- AddForeignKey
ALTER TABLE "public"."TelecomAccount" ADD CONSTRAINT "TelecomAccount_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."CallRecord" ADD CONSTRAINT "CallRecord_telecomAccountId_fkey" FOREIGN KEY ("telecomAccountId") REFERENCES "public"."TelecomAccount"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
