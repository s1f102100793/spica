/*
  Warnings:

  - Added the required column `feedback` to the `CompanyTip` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "CompanyTip" ADD COLUMN     "feedback" TEXT NOT NULL;
