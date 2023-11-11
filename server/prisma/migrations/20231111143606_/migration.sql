/*
  Warnings:

  - You are about to drop the column `companyId` on the `Employee` table. All the data in the column will be lost.
  - You are about to drop the column `profile_image` on the `EmployeeProfile` table. All the data in the column will be lost.
  - You are about to drop the column `date` on the `Tip` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `Tip` table. All the data in the column will be lost.
  - You are about to drop the `UserCompany` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `UserRole` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `employeeId` to the `Tip` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Employee" DROP CONSTRAINT "Employee_companyId_fkey";

-- DropForeignKey
ALTER TABLE "EmployeeProfile" DROP CONSTRAINT "EmployeeProfile_employeeId_fkey";

-- DropForeignKey
ALTER TABLE "Tip" DROP CONSTRAINT "Tip_userId_fkey";

-- DropForeignKey
ALTER TABLE "UserCompany" DROP CONSTRAINT "UserCompany_companyId_fkey";

-- DropForeignKey
ALTER TABLE "UserCompany" DROP CONSTRAINT "UserCompany_userId_fkey";

-- DropForeignKey
ALTER TABLE "UserRole" DROP CONSTRAINT "UserRole_roleId_fkey";

-- DropForeignKey
ALTER TABLE "UserRole" DROP CONSTRAINT "UserRole_userId_fkey";

-- AlterTable
ALTER TABLE "Employee" DROP COLUMN "companyId",
ADD COLUMN     "isDeleted" BOOLEAN NOT NULL DEFAULT false,
ALTER COLUMN "createdAt" SET DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "EmployeeProfile" DROP COLUMN "profile_image",
ADD COLUMN     "profileImage" TEXT NOT NULL DEFAULT '/images/default.png';

-- AlterTable
ALTER TABLE "Tip" DROP COLUMN "date",
DROP COLUMN "userId",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "employeeId" TEXT NOT NULL;

-- DropTable
DROP TABLE "UserCompany";

-- DropTable
DROP TABLE "UserRole";

-- CreateTable
CREATE TABLE "EmployeeCompany" (
    "id" SERIAL NOT NULL,
    "employeeId" TEXT NOT NULL,
    "companyId" INTEGER NOT NULL,

    CONSTRAINT "EmployeeCompany_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "EmployeeRole" (
    "id" SERIAL NOT NULL,
    "employeeId" TEXT NOT NULL,
    "roleId" INTEGER NOT NULL,

    CONSTRAINT "EmployeeRole_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "EmployeeCompany_employeeId_companyId_key" ON "EmployeeCompany"("employeeId", "companyId");

-- AddForeignKey
ALTER TABLE "EmployeeProfile" ADD CONSTRAINT "EmployeeProfile_employeeId_fkey" FOREIGN KEY ("employeeId") REFERENCES "Employee"("firebaseUid") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EmployeeCompany" ADD CONSTRAINT "EmployeeCompany_employeeId_fkey" FOREIGN KEY ("employeeId") REFERENCES "Employee"("firebaseUid") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EmployeeCompany" ADD CONSTRAINT "EmployeeCompany_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "Company"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EmployeeRole" ADD CONSTRAINT "EmployeeRole_employeeId_fkey" FOREIGN KEY ("employeeId") REFERENCES "Employee"("firebaseUid") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EmployeeRole" ADD CONSTRAINT "EmployeeRole_roleId_fkey" FOREIGN KEY ("roleId") REFERENCES "Role"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Tip" ADD CONSTRAINT "Tip_employeeId_fkey" FOREIGN KEY ("employeeId") REFERENCES "Employee"("firebaseUid") ON DELETE RESTRICT ON UPDATE CASCADE;
