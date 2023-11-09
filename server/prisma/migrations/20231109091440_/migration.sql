/*
  Warnings:

  - The primary key for the `EmployeeProfile` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - A unique constraint covering the columns `[employeeId]` on the table `EmployeeProfile` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `profileId` to the `EmployeeProfile` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "EmployeeProfile" DROP CONSTRAINT "EmployeeProfile_pkey",
ADD COLUMN     "profileId" TEXT NOT NULL,
ADD CONSTRAINT "EmployeeProfile_pkey" PRIMARY KEY ("profileId");

-- CreateIndex
CREATE UNIQUE INDEX "EmployeeProfile_employeeId_key" ON "EmployeeProfile"("employeeId");
