/*
  Warnings:

  - You are about to drop the column `constEffectiveness` on the `Curation` table. All the data in the column will be lost.
  - Added the required column `costEffectiveness` to the `Curation` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."Curation" DROP COLUMN "constEffectiveness",
ADD COLUMN     "costEffectiveness" INTEGER NOT NULL;
