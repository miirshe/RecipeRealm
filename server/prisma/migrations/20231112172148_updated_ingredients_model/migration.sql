/*
  Warnings:

  - Changed the type of `ingredientName` on the `Ingredients` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Ingredients" DROP COLUMN "ingredientName",
ADD COLUMN     "ingredientName" JSONB NOT NULL;
