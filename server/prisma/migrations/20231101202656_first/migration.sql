-- CreateTable
CREATE TABLE "Users" (
    "id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "role" TEXT NOT NULL,

    CONSTRAINT "Users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Recipes" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "cookingInst" TEXT NOT NULL,
    "nutritionInfo" JSONB NOT NULL,

    CONSTRAINT "Recipes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Comments" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "recipeId" INTEGER NOT NULL,
    "recipeComment" TEXT NOT NULL,
    "timestamp" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Comments_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Ratings" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "recipeId" INTEGER NOT NULL,
    "recipeRating" DOUBLE PRECISION NOT NULL,
    "timestamp" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Ratings_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Categories" (
    "id" SERIAL NOT NULL,
    "categoryName" TEXT NOT NULL,

    CONSTRAINT "Categories_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Ingredients" (
    "id" SERIAL NOT NULL,
    "ingredientName" TEXT NOT NULL,

    CONSTRAINT "Ingredients_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DietaryPreferences" (
    "id" SERIAL NOT NULL,
    "dietaryName" TEXT NOT NULL,

    CONSTRAINT "DietaryPreferences_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "WinePairings" (
    "id" SERIAL NOT NULL,
    "wineName" TEXT NOT NULL,

    CONSTRAINT "WinePairings_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DessertPairings" (
    "id" SERIAL NOT NULL,
    "dessertName" TEXT NOT NULL,

    CONSTRAINT "DessertPairings_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_WinePairings" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_RecipeCategories" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_IngredientCategories" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_DietaryPreferences" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_DessertPairings" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Users_email_key" ON "Users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "_WinePairings_AB_unique" ON "_WinePairings"("A", "B");

-- CreateIndex
CREATE INDEX "_WinePairings_B_index" ON "_WinePairings"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_RecipeCategories_AB_unique" ON "_RecipeCategories"("A", "B");

-- CreateIndex
CREATE INDEX "_RecipeCategories_B_index" ON "_RecipeCategories"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_IngredientCategories_AB_unique" ON "_IngredientCategories"("A", "B");

-- CreateIndex
CREATE INDEX "_IngredientCategories_B_index" ON "_IngredientCategories"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_DietaryPreferences_AB_unique" ON "_DietaryPreferences"("A", "B");

-- CreateIndex
CREATE INDEX "_DietaryPreferences_B_index" ON "_DietaryPreferences"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_DessertPairings_AB_unique" ON "_DessertPairings"("A", "B");

-- CreateIndex
CREATE INDEX "_DessertPairings_B_index" ON "_DessertPairings"("B");

-- AddForeignKey
ALTER TABLE "Recipes" ADD CONSTRAINT "Recipes_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Comments" ADD CONSTRAINT "Comments_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Comments" ADD CONSTRAINT "Comments_recipeId_fkey" FOREIGN KEY ("recipeId") REFERENCES "Recipes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Ratings" ADD CONSTRAINT "Ratings_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Ratings" ADD CONSTRAINT "Ratings_recipeId_fkey" FOREIGN KEY ("recipeId") REFERENCES "Recipes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_WinePairings" ADD CONSTRAINT "_WinePairings_A_fkey" FOREIGN KEY ("A") REFERENCES "Recipes"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_WinePairings" ADD CONSTRAINT "_WinePairings_B_fkey" FOREIGN KEY ("B") REFERENCES "WinePairings"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_RecipeCategories" ADD CONSTRAINT "_RecipeCategories_A_fkey" FOREIGN KEY ("A") REFERENCES "Categories"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_RecipeCategories" ADD CONSTRAINT "_RecipeCategories_B_fkey" FOREIGN KEY ("B") REFERENCES "Recipes"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_IngredientCategories" ADD CONSTRAINT "_IngredientCategories_A_fkey" FOREIGN KEY ("A") REFERENCES "Ingredients"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_IngredientCategories" ADD CONSTRAINT "_IngredientCategories_B_fkey" FOREIGN KEY ("B") REFERENCES "Recipes"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_DietaryPreferences" ADD CONSTRAINT "_DietaryPreferences_A_fkey" FOREIGN KEY ("A") REFERENCES "DietaryPreferences"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_DietaryPreferences" ADD CONSTRAINT "_DietaryPreferences_B_fkey" FOREIGN KEY ("B") REFERENCES "Recipes"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_DessertPairings" ADD CONSTRAINT "_DessertPairings_A_fkey" FOREIGN KEY ("A") REFERENCES "DessertPairings"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_DessertPairings" ADD CONSTRAINT "_DessertPairings_B_fkey" FOREIGN KEY ("B") REFERENCES "Recipes"("id") ON DELETE CASCADE ON UPDATE CASCADE;
