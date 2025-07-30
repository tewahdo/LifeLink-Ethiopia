/*
  Warnings:

  - Added the required column `updatedAt` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."User" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "goals" TEXT,
ADD COLUMN     "role" TEXT NOT NULL DEFAULT 'citizen',
ADD COLUMN     "routines" TEXT,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;
