/*
  Warnings:

  - You are about to drop the column `userId` on the `courses` table. All the data in the column will be lost.
  - You are about to drop the `_CourseToUser` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_CourseToUser" DROP CONSTRAINT "_CourseToUser_A_fkey";

-- DropForeignKey
ALTER TABLE "_CourseToUser" DROP CONSTRAINT "_CourseToUser_B_fkey";

-- AlterTable
ALTER TABLE "courses" DROP COLUMN "userId";

-- DropTable
DROP TABLE "_CourseToUser";
