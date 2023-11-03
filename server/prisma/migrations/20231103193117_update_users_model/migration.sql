/*
  Warnings:

  - Added the required column `bio` to the `Users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `profile` to the `Users` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Users" ADD COLUMN     "bio" TEXT NOT NULL,
ADD COLUMN     "profile" TEXT NOT NULL;
