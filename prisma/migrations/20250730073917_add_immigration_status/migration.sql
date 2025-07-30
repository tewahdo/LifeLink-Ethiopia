-- CreateTable
CREATE TABLE "public"."ImmigrationStatus" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "visaType" TEXT NOT NULL,
    "status" TEXT NOT NULL,

    CONSTRAINT "ImmigrationStatus_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "public"."ImmigrationStatus" ADD CONSTRAINT "ImmigrationStatus_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
