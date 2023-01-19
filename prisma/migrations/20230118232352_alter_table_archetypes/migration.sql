-- AlterTable
ALTER TABLE "archetypes" ADD COLUMN     "description" TEXT,
ADD COLUMN     "id_skill" TEXT;

-- AddForeignKey
ALTER TABLE "archetypes" ADD CONSTRAINT "archetypes_id_skill_fkey" FOREIGN KEY ("id_skill") REFERENCES "skills"("id") ON DELETE SET NULL ON UPDATE CASCADE;
