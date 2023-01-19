-- AlterTable
ALTER TABLE "passives" ADD COLUMN     "enabled" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "skills" ADD COLUMN     "enabled" BOOLEAN NOT NULL DEFAULT false;
