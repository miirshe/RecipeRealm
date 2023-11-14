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

| Field                | Type                       |           Description                       |
|-------------         |----------                  |-----------------------------------          |
| id                   | Int                        | Unique identifier for the user              |
| username             | String                     | User's username                             |
| email                | String                     | User's email address                        |
| password             | String                     | User's password                             |
| role                 | Role                       | User's role (default: user)                 |
| createdAt            | DateTime                   | Date and time of user creation              |
| updatedAt            | DateTime                   | Date and time of last update                |

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

This code snippet returns a JSON response indicating that the user unsuccessfully registered , updated , and delete all about you see this message . It sets the status property to false and the message property to `user unsuccessfully`.
```
return res.json({
    status: false,
    message: 'unsuccessfully'
})
```

This code snippet returns a JSON response indicating that the user successfully registered , updated , and delete all about you see this message . It sets the status property to false and the message property to `user successfully`.
```
res.json({
   status: true,
   message: 'successfully'
})
```

### `Recipe Model`

| Field                | Type                       |           Description                       |
|-------------         |----------                  |-----------------------------------          |
| id                   | Int                        | Unique identifier for the user              |
| title                | String                     | User's title                                |
| description          | String                     | User's description                          |
| cookingInst          | String?                    | User's cookingInst                          |
| categoryName         | string                     | User's categoryName                         |
| ingredientName       | String?                    | User's ingredientName                       |
| userId               | Int                        | User's ID                                   |
| createdAt            | DateTime                   | Date and time of user creation              |
| updatedAt            | DateTime                   | Date and time of last update                |


### ` Recipe Routes and Endpoints `
```markdown
- recipeRoutes.post('/recipe/add', userAuthenticate, recipeValiation, add_recipe)
- recipeRoutes.get('/recipes', fetch_recipes)
- recipeRoutes.get('/recipe/currentUser', userAuthenticate, fetch_recipes)
- recipeRoutes.put('/recipe/:id', userAuthenticate, recipeValiation, update_recipe)
- recipeRoutes.delete('/recipe/:id', remove_recipe)
```

This code snippet returns a JSON response indicating that the recipe unsuccessfully registered , updated , and delete all about you see this message . It sets the status property to false and the message property to `unsuccessfully`.
```
return res.json({
    status: false,
    message: 'unsuccessfully'
})
```

This code snippet returns a JSON response indicating that the recipe successfully registered , updated , and delete all about you see this message . It sets the status property to false and the message property to `successfully`.
```
res.json({
   status: true,
   message: 'successfully'
})
```

 
 


