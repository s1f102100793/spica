/*
  Warnings:

  - Added the required column `feedback` to the `Tip` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Tip" ADD COLUMN     "feedback" TEXT NOT NULL;
