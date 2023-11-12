/*
  Warnings:

  - You are about to drop the `EmployeeRole` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `roleId` to the `EmployeeCompany` table without a default value. This is not possible if the table is not empty.
  - Added the required column `uodatedAt` to the `EmployeeProfile` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "EmployeeRole" DROP CONSTRAINT "EmployeeRole_employeeId_fkey";

-- DropForeignKey
ALTER TABLE "EmployeeRole" DROP CONSTRAINT "EmployeeRole_roleId_fkey";

-- AlterTable
ALTER TABLE "EmployeeCompany" ADD COLUMN     "roleId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "EmployeeProfile" ADD COLUMN     "uodatedAt" TIMESTAMP(3) NOT NULL;

-- DropTable
DROP TABLE "EmployeeRole";

-- AddForeignKey
ALTER TABLE "EmployeeCompany" ADD CONSTRAINT "EmployeeCompany_roleId_fkey" FOREIGN KEY ("roleId") REFERENCES "Role"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
