/*
  Warnings:

  - The `value` column on the `stats` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "attributes" ALTER COLUMN "value" SET DEFAULT 0;

-- AlterTable
ALTER TABLE "stats" DROP COLUMN "value",
ADD COLUMN     "value" INTEGER NOT NULL DEFAULT 0;
