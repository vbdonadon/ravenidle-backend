/*
  Warnings:

  - You are about to drop the `stats` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "stats";

-- CreateTable
CREATE TABLE "status" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "value" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "status_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "status_name_key" ON "status"("name");
