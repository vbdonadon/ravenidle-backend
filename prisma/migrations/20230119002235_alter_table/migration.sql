/*
  Warnings:

  - Made the column `id_archetype` on table `skills` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "skills" DROP CONSTRAINT "skills_id_archetype_fkey";

-- AlterTable
ALTER TABLE "skills" ALTER COLUMN "id_archetype" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "skills" ADD CONSTRAINT "skills_id_archetype_fkey" FOREIGN KEY ("id_archetype") REFERENCES "archetypes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
