/*
  Warnings:

  - You are about to drop the column `available_points` on the `characters` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "characters" DROP COLUMN "available_points",
ADD COLUMN     "attribute_points" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "experience" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "skill_points" INTEGER NOT NULL DEFAULT 0;

-- CreateTable
CREATE TABLE "Experience" (
    "id" TEXT NOT NULL,
    "level" INTEGER NOT NULL,
    "required" INTEGER NOT NULL,

    CONSTRAINT "Experience_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Experience_id_key" ON "Experience"("id");
