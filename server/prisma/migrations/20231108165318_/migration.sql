/*
  Warnings:

  - The primary key for the `EmployeeProfile` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `EmployeeProfile` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "EmployeeProfile" DROP CONSTRAINT "EmployeeProfile_pkey",
DROP COLUMN "id",
ADD CONSTRAINT "EmployeeProfile_pkey" PRIMARY KEY ("employeeId");
