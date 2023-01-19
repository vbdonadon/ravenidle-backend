/*
  Warnings:

  - Added the required column `id_skill` to the `archetypes` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "archetypes" ADD COLUMN     "id_skill" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "archetypes" ADD CONSTRAINT "archetypes_id_skill_fkey" FOREIGN KEY ("id_skill") REFERENCES "skills"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
