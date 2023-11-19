# RecipeRealm

## `Introduction`
This project involves creating a backend system where users can share and browse recipes. You need to implement user roles 
(regular users and administrators), with users able to post recipes, comment, and rate them. Recipes should have categories, ingredients, 
cooking instructions, and nutritional information. 

### `building with these tools `:
- Nodejs and Express
- Supabase
- PostgreSQL
- Prisma (ORM)


### `Models Of Schema RecipeRealm`:
 - User
 - Recipe
 - Rating
 - Comment
 - NutritionInfo
 - Profile


### `User Model`

| Field        | Type      | Description                                      | Attributes                                   |
| ------------ | --------- | ------------------------------------------------ | -------------------------------------------- |
| id           | Int       | Unique identifier for the user.                   | @id, @default(autoincrement())                |
| username     | String    | Username of the user.                            |                                               |
| email        | String    | Email address of the user.                        | @unique                                      |
| password     | String    | Password of the user.                            |                                               |
| role         | Role      | Role assigned to the user.                        | @default(user)                               |
| createdAt    | DateTime  | Date and time when the user was created.          | @default(now())                              |
| updatedAt    | DateTime  | Date and time when the user was last updated.     | @default(now())                              |
| recipe       | Recipe[]  | Array of recipes created by the user.             |                                              |
| comment      | Comment[] | Array of comments made by the user.               |                                              |
| rating       | Rating[]  | Array of ratings given by the user.               |                                              |
| profile      | Profile[] | Array of profiles associated with the user.       | 

### ` User Routes and Endpoints `
```markdown
- userRoutes.post('/user/register', UserValidation, register_user)
- userRoutes.post('/user/login', login_user)
- userRoutes.get('/users', fetch_users)
- userRoutes.get('/user/:id', fetch_user)
- userRoutes.delete('/user/:id', remove_user)
- userRoutes.put('/user/:id', update_user)
```

This code snippet returns a JSON response indicating that the user already exists. It sets the status property to false and the message property to `user already exists`.
```
return res.json({
    status: false,
    message: 'user already exists'
});

```

This code snippet returns a JSON response indicating that the user unsuccessfully `registered` , `updated` , and `delete` all about you see this message . It sets the status property to false and the message property to `user unsuccessfully`.
```
return res.json({
    status: false,
    message: 'unsuccessfully'
})
```

This code snippet returns a JSON response indicating that the user successfully `registered` , `updated` , and `delete` all about you see this message . It sets the status property to true and the message property to `user successfully`.
```
res.json({
   status: true,
   message: 'successfully'
})
```

### `Recipe Model`

| Field           | Type            | Description                                      | Attributes                                   |
| --------------- | --------------- | ------------------------------------------------ | -------------------------------------------- |
| id              | Int             | Unique identifier for the recipe.                 | @id, @default(autoincrement())                |
| userId          | Int             | Identifier for the associated user.               |                                              |
| title           | String          | Title of the recipe.                              |                                              |
| description     | String          | Description or summary of the recipe.             |                                              |
| cookingInst     | String          | Cooking instructions for the recipe.              | Nullable                                     |
| categoryName    | String          | Name of the category to which the recipe belongs. |                                              |
| ingredientName  | String          | Name of the main ingredient in the recipe.        | Nullable                                     |
| comment         | Comment[]       | Array of comments associated with the recipe.     |                                              |
| rating          | Rating[]        | Array of ratings given to the recipe.             |                                              |
| nutritionInfo   | NutritionInfo[] | Array of nutrition information for the recipe.    |                                              |
| user            | User            | Relation to the User model.                       | @relation(fields: [userId], references: [id]) |
| createdAt       | DateTime        | Date and time when the recipe was created.        | @default(now())                              |
| updatedAt       | DateTime        | Date and time when the recipe was last updated.   | @default(now())                              |


### ` Recipe Routes and Endpoints `
```markdown
- recipeRoutes.post('/recipe/add', userAuthenticate, recipeValiation, add_recipe)
- recipeRoutes.get('/recipes', fetch_recipes)
- recipeRoutes.get('/recipe/currentUser', userAuthenticate, fetch_recipes)
- recipeRoutes.put('/recipe/:id', userAuthenticate, recipeValiation, update_recipe)
- recipeRoutes.delete('/recipe/:id', remove_recipe)
```

This code snippet returns a JSON response indicating that the recipe unsuccessfully `registered` , `updated` , and `delete` all about you see this message . It sets the status property to false and the message property to `unsuccessfully`.
```
return res.json({
    status: false,
    message: 'unsuccessfully'
})
```

This code snippet returns a JSON response indicating that the recipe successfully `registered` , `updated` , and `delete` all about you see this message . It sets the status property to true and the message property to `successfully`.
```
res.json({
   status: true,
   message: 'successfully'
})
```


### `Comment Model`

| Field           | Type     | Description                                      | Attributes                                   |
| --------------- | -------- | ------------------------------------------------ | -------------------------------------------- |
| id              | Int      | Unique identifier for the comment.                | @id, @default(autoincrement())                |
| userId          | Int      | Identifier for the associated user.               |                                              |
| recipeId        | Int      | Identifier for the associated recipe.             |                                              |
| recipeComment   | String   | Content of the comment.                           |                                              |
| createdAt       | DateTime | Date and time when the comment was created.       | @default(now())                              |
| updatedAt       | DateTime | Date and time when the comment was last updated.  | @default(now())                              |
| user            | User     | Relation to the User model.                       | @relation(fields: [userId], references: [id]) |
| recipe          | Recipe   | Relation to the Recipe model.                     | @relation(fields: [recipeId], references: [id]) |


### ` Comment Routes and Endpoints `
```markdown
- commentRoutes.post('/comment/add', userAuthenticate, commentValidation, add_comment)
- commentRoutes.get('/comments', fetchComments)
- commentRoutes.get('/comment/:id', fetchComment)
- commentRoutes.put('/comment/:id', updateComment)
- commentRoutes.delete('/comment/:id', deleteComment)
```

This code snippet returns a JSON response indicating that the comment unsuccessfully `registered` , `updated` , and `delete` all about you see this message . It sets the status property to false and the message property to `unsuccessfully`.
```
return res.json({
    status: false,
    message: 'unsuccessfully'
})
```

This code snippet returns a JSON response indicating that the comment successfully `registered` , `updated` , and `delete` all about you see this message . It sets the status property to true and the message property to `successfully`.
```
res.json({
   status: true,
   message: 'successfully'
})
```

### `Rating Model`

| Field         | Type     | Description                                      | Attributes                                     |
| ------------- | -------- | ------------------------------------------------ | --------------------------------------------   |
| id            | Int      | Unique identifier for the rating.                 | @id, @default(autoincrement())                |
| userId        | Int      | Identifier for the associated user.               |                                               |
| recipeId      | Int      | Identifier for the associated recipe.             |                                               |
| recipeRating  | Float    | Rating given to the recipe.                       |                                               |
| createdAt     | DateTime | Date and time when the rating was created.        | @default(now())                               |
| updatedAt     | DateTime | Date and time when the rating was last updated.   | @default(now())                               |
| user          | User     | Relation to the User model.                       | @relation(fields: [userId], references: [id]) |
| recipe        | Recipe   | Relation to the Recipe model.                     | @relation(fields: [recipeId], references: [id]) |


### ` Rating Routes and Endpoints `
```markdown
- ratingRoutes.post('/rating/add', userAuthenticate, ratingValidation, addRating)
- ratingRoutes.get('/ratings', fetchRatings)
- ratingRoutes.get('/rating/:id', fetchRating)
- ratingRoutes.put('/rating/:id', updateRating)
- ratingRoutes.delete('/rating/:id', deleteRating)
```

This code snippet returns a JSON response indicating that the rating `registered` , `updated` , and `delete` all about you see this message . It sets the status property to false and the message property to `unsuccessfully`.
```
return res.json({
    status: false,
    message: 'unsuccessfully'
})
```

This code snippet returns a JSON response indicating that the rating successfully `registered` , `updated` , and `delete` all about you see this message . It sets the status property to true and the message property to `successfully`.
```
res.json({
   status: true,
   message: 'successfully'
})
```


### `NutritionInfo Model`

| Field      | Type   | Description                                      | Attributes                                     |
| ---------- | ------ | ------------------------------------------------ | --------------------------------------------   |
| id         | Int    | Unique identifier for the nutrition information. | @id, @default(autoincrement())                 |
| calories   | Int    | Number of calories in the recipe.                | Nullable                                       |
| fat        | Float  | Amount of fat in grams in the recipe.            | Nullable                                       |
| carbs      | Float  | Amount of carbohydrates in grams in the recipe.  | Nullable                                       |
| protein    | Float  | Amount of protein in grams in the recipe.        | Nullable                                       |
| recipeId   | Int    | Identifier for the associated recipe.            |                                                 |
| recipe     | Recipe | Relation to the Recipe model.                    | @relation(fields: [recipeId], references: [id]) |


### ` NutritionInfo Routes and Endpoints `
```markdown
- nutritionInfoRoutes.post('/nutrition/add', nutritionInfoValidation, addNutritioninfo);
- nutritionInfoRoutes.put('/nutrition/:id', updateNutritioninfo);
- nutritionInfoRoutes.delete('/nutrition/:id', deleteNutritioninfo);
- nutritionInfoRoutes.get('/nutrition/:id', fetchNutritioninfo);
- nutritionInfoRoutes.get('/nutritions', fetchNutritioninfos);
```

This code snippet returns a JSON response indicating that the NutritionInfo `registered` , `updated` , and `delete` all about you see this message . It sets the status property to false and the message property to `unsuccessfully`.
```
return res.json({
    status: false,
    message: 'unsuccessfully'
})
```

This code snippet returns a JSON response indicating that the NutritionInfo `registered` , `updated` , and `delete` all about you see this message . It sets the status property to true and the message property to `successfully`.
```
res.json({
   status: true,
   message: 'successfully'
})
```


### `Profile Model`

| Field         | Type    | Description                              | Attributes                              |
| ------------- | ------- | ---------------------------------------- | --------------------------------------- |
| id            | Int     | Unique identifier for the profile.        | @id, @default(autoincrement())           |
| firstName     | String  | First name of the profile owner.          | Nullable                                |
| lastName      | String  | Last name of the profile owner.           | Nullable                                |
| bio           | String  | Biography or description of the profile.  | Nullable                                |
| avatar        | String  | URL or path to the profile avatar image.  | Nullable                                |
| facebookLink  | String  | URL to the Facebook profile of the user.  | Nullable                                |
| youtubeLink   | String  | URL to the YouTube profile of the user.   | Nullable                                |
| twitterLink   | String  | URL to the Twitter profile of the user.   | Nullable                                |
| githubLink    | String  | URL to the GitHub profile of the user.    | Nullable                                |
| userId        | Int     | Unique identifier for the associated user.| @unique                                 |
| user          | User    | Relation to the User model.               | @relation(fields: [userId], references: [id]) |


### ` userProfile Routes and Endpoints `
```markdown
- userProfileRoutes.post('/userProfile/add', userAuthenticate, userProfileValidation, addUserProfile);
- userProfileRoutes.put('/userProfile/:id', userProfileValidation, updateUserProfile);
- userProfileRoutes.delete('/userProfile/:id', deleteUserProfile);
- userProfileRoutes.get('/userProfile/:id', fetchUserProfile);
- userProfileRoutes.get('/usersProfile', fetchUsersProfile);
```

This code snippet returns a JSON response indicating that the Profile  `registered` , `updated` , and `delete` all about you see this message . It sets the status property to false and the message property to `unsuccessfully`.
```
return res.json({
    status: false,
    message: 'unsuccessfully'
})
```

This code snippet returns a JSON response indicating that the Profile  `registered` , `updated` , and `delete` all about you see this message . It sets the status property to true and the message property to `successfully`.
```
res.json({
   status: true,
   message: 'successfully'
})
```

 
 


