/*
  Warnings:

  - A unique constraint covering the columns `[nickname]` on the table `Curation` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[password]` on the table `Curation` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Curation_nickname_key" ON "public"."Curation"("nickname");

-- CreateIndex
CREATE UNIQUE INDEX "Curation_password_key" ON "public"."Curation"("password");
