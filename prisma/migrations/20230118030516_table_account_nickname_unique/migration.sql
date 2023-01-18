/*
  Warnings:

  - A unique constraint covering the columns `[nickname]` on the table `account` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "account_nickname_key" ON "account"("nickname");
