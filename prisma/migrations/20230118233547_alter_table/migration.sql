/*
  Warnings:

  - You are about to drop the column `id_skill` on the `archetypes` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "archetypes" DROP CONSTRAINT "archetypes_id_skill_fkey";

-- AlterTable
ALTER TABLE "archetypes" DROP COLUMN "id_skill";

-- AlterTable
ALTER TABLE "skills" ADD COLUMN     "id_archetype" TEXT;

-- AddForeignKey
ALTER TABLE "skills" ADD CONSTRAINT "skills_id_archetype_fkey" FOREIGN KEY ("id_archetype") REFERENCES "archetypes"("id") ON DELETE SET NULL ON UPDATE CASCADE;
