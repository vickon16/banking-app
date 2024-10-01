/*
  Warnings:

  - Made the column `dwollaCustomerUrl` on table `user` required. This step will fail if there are existing NULL values in that column.
  - Made the column `dwollaCustomerId` on table `user` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "user" ALTER COLUMN "dwollaCustomerUrl" SET NOT NULL,
ALTER COLUMN "dwollaCustomerId" SET NOT NULL;
