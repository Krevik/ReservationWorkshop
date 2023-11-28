/*
  Warnings:

  - Added the required column `reserverUserId` to the `Visit` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Visit" ADD COLUMN     "reserverUserId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Visit" ADD CONSTRAINT "Visit_reserverUserId_fkey" FOREIGN KEY ("reserverUserId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
