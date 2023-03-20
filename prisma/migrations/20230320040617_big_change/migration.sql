/*
  Warnings:

  - You are about to drop the column `value` on the `attributes` table. All the data in the column will be lost.
  - You are about to drop the column `id_character` on the `status` table. All the data in the column will be lost.
  - You are about to drop the column `value` on the `status` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[id]` on the table `characters` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `description` to the `attributes` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "status" DROP CONSTRAINT "status_id_character_fkey";

-- AlterTable
ALTER TABLE "attributes" DROP COLUMN "value",
ADD COLUMN     "description" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "characters" ADD COLUMN     "level" INTEGER NOT NULL DEFAULT 1;

-- AlterTable
ALTER TABLE "status" DROP COLUMN "id_character",
DROP COLUMN "value";

-- CreateTable
CREATE TABLE "character_archetypes" (
    "id" TEXT NOT NULL,
    "archetype_name" TEXT NOT NULL,
    "id_character" TEXT NOT NULL,
    "id_archetype" TEXT NOT NULL,

    CONSTRAINT "character_archetypes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "characters_attributes" (
    "id" TEXT NOT NULL,
    "attribute_name" TEXT NOT NULL,
    "attribute_value" INTEGER NOT NULL DEFAULT 0,
    "id_character" TEXT NOT NULL,
    "id_attributes" TEXT NOT NULL,

    CONSTRAINT "characters_attributes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "characters_status" (
    "id" TEXT NOT NULL,
    "status_name" TEXT NOT NULL,
    "status_value" DECIMAL(65,30) NOT NULL DEFAULT 0,
    "id_character" TEXT NOT NULL,
    "id_status" TEXT NOT NULL,

    CONSTRAINT "characters_status_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "character_archetypes_id_key" ON "character_archetypes"("id");

-- CreateIndex
CREATE UNIQUE INDEX "character_archetypes_archetype_name_key" ON "character_archetypes"("archetype_name");

-- CreateIndex
CREATE UNIQUE INDEX "characters_attributes_id_key" ON "characters_attributes"("id");

-- CreateIndex
CREATE UNIQUE INDEX "characters_attributes_attribute_name_key" ON "characters_attributes"("attribute_name");

-- CreateIndex
CREATE UNIQUE INDEX "characters_status_id_key" ON "characters_status"("id");

-- CreateIndex
CREATE UNIQUE INDEX "characters_status_status_name_key" ON "characters_status"("status_name");

-- CreateIndex
CREATE UNIQUE INDEX "characters_id_key" ON "characters"("id");

-- AddForeignKey
ALTER TABLE "character_archetypes" ADD CONSTRAINT "character_archetypes_id_character_fkey" FOREIGN KEY ("id_character") REFERENCES "characters"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "character_archetypes" ADD CONSTRAINT "character_archetypes_id_archetype_fkey" FOREIGN KEY ("id_archetype") REFERENCES "archetypes"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "characters_attributes" ADD CONSTRAINT "characters_attributes_id_character_fkey" FOREIGN KEY ("id_character") REFERENCES "characters"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "characters_attributes" ADD CONSTRAINT "characters_attributes_id_attributes_fkey" FOREIGN KEY ("id_attributes") REFERENCES "attributes"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "characters_status" ADD CONSTRAINT "characters_status_id_character_fkey" FOREIGN KEY ("id_character") REFERENCES "characters"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "characters_status" ADD CONSTRAINT "characters_status_id_status_fkey" FOREIGN KEY ("id_status") REFERENCES "status"("id") ON DELETE CASCADE ON UPDATE CASCADE;
