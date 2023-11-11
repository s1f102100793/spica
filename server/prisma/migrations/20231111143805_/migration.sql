-- CreateTable
CREATE TABLE "CompanyTip" (
    "id" SERIAL NOT NULL,
    "companyId" INTEGER NOT NULL,
    "amount" DOUBLE PRECISION NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "CompanyTip_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "CompanyTip" ADD CONSTRAINT "CompanyTip_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "Company"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
