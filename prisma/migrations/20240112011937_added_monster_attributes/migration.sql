/*
  Warnings:

  - Added the required column `attack` to the `monsters` table without a default value. This is not possible if the table is not empty.
  - Added the required column `defense` to the `monsters` table without a default value. This is not possible if the table is not empty.
  - Added the required column `level` to the `monsters` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "monsters" ADD COLUMN     "attack" INTEGER NOT NULL,
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "defense" INTEGER NOT NULL,
ADD COLUMN     "level" INTEGER NOT NULL;
