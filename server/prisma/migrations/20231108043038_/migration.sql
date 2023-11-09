/*
  Warnings:

  - You are about to drop the column `displayId` on the `Employee` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `EmployeeProfile` table. All the data in the column will be lost.
  - Added the required column `employeeId` to the `EmployeeProfile` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Employee_displayId_key";

-- AlterTable
ALTER TABLE "Employee" DROP COLUMN "displayId";

-- AlterTable
ALTER TABLE "EmployeeProfile" DROP COLUMN "userId",
ADD COLUMN     "employeeId" TEXT NOT NULL;
