-- CreateTable
CREATE TABLE "public"."Curation" (
    "id" SERIAL NOT NULL,
    "nickname" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "trendy" INTEGER NOT NULL,
    "personality" INTEGER NOT NULL,
    "practicality" INTEGER NOT NULL,
    "constEffectiveness" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Curation_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Curation_nickname_key" ON "public"."Curation"("nickname");
