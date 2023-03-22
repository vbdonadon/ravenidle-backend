/*
  Warnings:

  - You are about to drop the `character_experience` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "character_experience" DROP CONSTRAINT "character_experience_id_character_fkey";

-- AlterTable
ALTER TABLE "characters" ADD COLUMN     "current_experience" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "required_experience" INTEGER NOT NULL DEFAULT 0;

-- DropTable
DROP TABLE "character_experience";
