/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `monsters` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[category]` on the table `monsters` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `category` to the `monsters` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "monsters" ADD COLUMN     "category" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "monsters_name_key" ON "monsters"("name");

-- CreateIndex
CREATE UNIQUE INDEX "monsters_category_key" ON "monsters"("category");
