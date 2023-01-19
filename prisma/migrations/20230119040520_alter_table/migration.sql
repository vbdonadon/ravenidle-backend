/*
  Warnings:

  - You are about to drop the `passives` table. If the table is not empty, all the data it contains will be lost.
  - Made the column `type` on table `skills` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "skills" ALTER COLUMN "type" SET NOT NULL;

-- AlterTable
ALTER TABLE "status" ADD COLUMN     "id_character" TEXT;

-- DropTable
DROP TABLE "passives";

-- AddForeignKey
ALTER TABLE "status" ADD CONSTRAINT "status_id_character_fkey" FOREIGN KEY ("id_character") REFERENCES "characters"("id") ON DELETE SET NULL ON UPDATE CASCADE;
