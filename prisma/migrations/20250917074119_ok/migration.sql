/*
  Warnings:

  - You are about to drop the `_StyleToTag` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "public"."_StyleToTag" DROP CONSTRAINT "_StyleToTag_A_fkey";

-- DropForeignKey
ALTER TABLE "public"."_StyleToTag" DROP CONSTRAINT "_StyleToTag_B_fkey";

-- DropTable
DROP TABLE "public"."_StyleToTag";
