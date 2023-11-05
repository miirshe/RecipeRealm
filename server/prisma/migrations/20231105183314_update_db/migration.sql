/*
  Warnings:

  - You are about to drop the column `role` on the `Users` table. All the data in the column will be lost.
  - You are about to drop the `Categories` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `DessertPairings` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `DietaryPreferences` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `WinePairings` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_DessertPairings` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_DietaryPreferences` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_IngredientCategories` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_RecipeCategories` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_WinePairings` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `recipeId` to the `Ingredients` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `Ingredients` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "_DessertPairings" DROP CONSTRAINT "_DessertPairings_A_fkey";

-- DropForeignKey
ALTER TABLE "_DessertPairings" DROP CONSTRAINT "_DessertPairings_B_fkey";

-- DropForeignKey
ALTER TABLE "_DietaryPreferences" DROP CONSTRAINT "_DietaryPreferences_A_fkey";

-- DropForeignKey
ALTER TABLE "_DietaryPreferences" DROP CONSTRAINT "_DietaryPreferences_B_fkey";

-- DropForeignKey
ALTER TABLE "_IngredientCategories" DROP CONSTRAINT "_IngredientCategories_A_fkey";

-- DropForeignKey
ALTER TABLE "_IngredientCategories" DROP CONSTRAINT "_IngredientCategories_B_fkey";

-- DropForeignKey
ALTER TABLE "_RecipeCategories" DROP CONSTRAINT "_RecipeCategories_A_fkey";

-- DropForeignKey
ALTER TABLE "_RecipeCategories" DROP CONSTRAINT "_RecipeCategories_B_fkey";

-- DropForeignKey
ALTER TABLE "_WinePairings" DROP CONSTRAINT "_WinePairings_A_fkey";

-- DropForeignKey
ALTER TABLE "_WinePairings" DROP CONSTRAINT "_WinePairings_B_fkey";

-- AlterTable
ALTER TABLE "Ingredients" ADD COLUMN     "recipeId" INTEGER NOT NULL,
ADD COLUMN     "userId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Users" DROP COLUMN "role";

-- DropTable
DROP TABLE "Categories";

-- DropTable
DROP TABLE "DessertPairings";

-- DropTable
DROP TABLE "DietaryPreferences";

-- DropTable
DROP TABLE "WinePairings";

-- DropTable
DROP TABLE "_DessertPairings";

-- DropTable
DROP TABLE "_DietaryPreferences";

-- DropTable
DROP TABLE "_IngredientCategories";

-- DropTable
DROP TABLE "_RecipeCategories";

-- DropTable
DROP TABLE "_WinePairings";

-- AddForeignKey
ALTER TABLE "Ingredients" ADD CONSTRAINT "Ingredients_recipeId_fkey" FOREIGN KEY ("recipeId") REFERENCES "Recipes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
