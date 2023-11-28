/*
  Warnings:

  - The primary key for the `Company` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- DropForeignKey
ALTER TABLE "CompanyTip" DROP CONSTRAINT "CompanyTip_companyId_fkey";

-- DropForeignKey
ALTER TABLE "EmployeeCompany" DROP CONSTRAINT "EmployeeCompany_companyId_fkey";

-- DropForeignKey
ALTER TABLE "Tip" DROP CONSTRAINT "Tip_companyId_fkey";

-- AlterTable
ALTER TABLE "Company" DROP CONSTRAINT "Company_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Company_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Company_id_seq";

-- AlterTable
ALTER TABLE "CompanyTip" ALTER COLUMN "companyId" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "EmployeeCompany" ALTER COLUMN "companyId" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "Tip" ALTER COLUMN "companyId" SET DATA TYPE TEXT;

-- AddForeignKey
ALTER TABLE "EmployeeCompany" ADD CONSTRAINT "EmployeeCompany_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "Company"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Tip" ADD CONSTRAINT "Tip_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "Company"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CompanyTip" ADD CONSTRAINT "CompanyTip_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "Company"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
