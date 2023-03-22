/*
  Warnings:

  - You are about to drop the column `experience` on the `characters` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "characters" DROP COLUMN "experience";

-- CreateTable
CREATE TABLE "character_experience" (
    "id" TEXT NOT NULL,
    "current_experience" INTEGER NOT NULL DEFAULT 0,
    "required_experience" INTEGER NOT NULL DEFAULT 0,
    "id_character" TEXT NOT NULL,

    CONSTRAINT "character_experience_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "character_experience" ADD CONSTRAINT "character_experience_id_character_fkey" FOREIGN KEY ("id_character") REFERENCES "characters"("id") ON DELETE CASCADE ON UPDATE CASCADE;
