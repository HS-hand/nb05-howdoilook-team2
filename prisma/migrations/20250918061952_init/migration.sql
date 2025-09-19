-- CreateEnum
CREATE TYPE "public"."CATEGORYTYPE" AS ENUM ('top', 'bottom', 'outer', 'dress', 'shoes', 'bag', 'accessory');

-- CreateTable
CREATE TABLE "public"."Style" (
    "id" TEXT NOT NULL,
    "nickname" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "viewCount" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Style_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Curation" (
    "id" TEXT NOT NULL,
    "styleId" TEXT NOT NULL,
    "nickname" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "trendy" INTEGER NOT NULL,
    "personality" INTEGER NOT NULL,
    "practicality" INTEGER NOT NULL,
    "costEffectiveness" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Curation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Comment" (
    "id" TEXT NOT NULL,
    "curationId" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Comment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."CategoryItem" (
    "id" TEXT NOT NULL,
    "styleId" TEXT NOT NULL,
    "type" "public"."CATEGORYTYPE" NOT NULL,
    "name" TEXT NOT NULL,
    "brand" TEXT NOT NULL,
    "price" INTEGER NOT NULL,

    CONSTRAINT "CategoryItem_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Tag" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Tag_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."StyleContainTag" (
    "styleId" TEXT NOT NULL,
    "tagId" TEXT NOT NULL,

    CONSTRAINT "StyleContainTag_pkey" PRIMARY KEY ("styleId","tagId")
);

-- CreateTable
CREATE TABLE "public"."StyleImage" (
    "id" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "styleId" TEXT NOT NULL,

    CONSTRAINT "StyleImage_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."_StyleToTag" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,

    CONSTRAINT "_StyleToTag_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE UNIQUE INDEX "Comment_curationId_key" ON "public"."Comment"("curationId");

-- CreateIndex
CREATE INDEX "_StyleToTag_B_index" ON "public"."_StyleToTag"("B");

-- AddForeignKey
ALTER TABLE "public"."Curation" ADD CONSTRAINT "Curation_styleId_fkey" FOREIGN KEY ("styleId") REFERENCES "public"."Style"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Comment" ADD CONSTRAINT "Comment_curationId_fkey" FOREIGN KEY ("curationId") REFERENCES "public"."Curation"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."CategoryItem" ADD CONSTRAINT "CategoryItem_styleId_fkey" FOREIGN KEY ("styleId") REFERENCES "public"."Style"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."StyleContainTag" ADD CONSTRAINT "StyleContainTag_styleId_fkey" FOREIGN KEY ("styleId") REFERENCES "public"."Style"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."StyleContainTag" ADD CONSTRAINT "StyleContainTag_tagId_fkey" FOREIGN KEY ("tagId") REFERENCES "public"."Tag"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."StyleImage" ADD CONSTRAINT "StyleImage_styleId_fkey" FOREIGN KEY ("styleId") REFERENCES "public"."Style"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."_StyleToTag" ADD CONSTRAINT "_StyleToTag_A_fkey" FOREIGN KEY ("A") REFERENCES "public"."Style"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."_StyleToTag" ADD CONSTRAINT "_StyleToTag_B_fkey" FOREIGN KEY ("B") REFERENCES "public"."Tag"("id") ON DELETE CASCADE ON UPDATE CASCADE;
