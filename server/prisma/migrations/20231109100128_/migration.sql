/*
  Warnings:

  - The primary key for the `EmployeeProfile` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `profileId` column on the `EmployeeProfile` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "EmployeeProfile" DROP CONSTRAINT "EmployeeProfile_pkey",
DROP COLUMN "profileId",
ADD COLUMN     "profileId" SERIAL NOT NULL,
ADD CONSTRAINT "EmployeeProfile_pkey" PRIMARY KEY ("profileId");
