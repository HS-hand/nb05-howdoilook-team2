-- DropForeignKey
ALTER TABLE "public"."StyleContainTag" DROP CONSTRAINT "StyleContainTag_tagId_fkey";

-- AddForeignKey
ALTER TABLE "public"."StyleContainTag" ADD CONSTRAINT "StyleContainTag_tagId_fkey" FOREIGN KEY ("tagId") REFERENCES "public"."Tag"("id") ON DELETE CASCADE ON UPDATE CASCADE;
