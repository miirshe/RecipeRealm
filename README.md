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

| Field                | Type                       | Description                       |
|-------------         |----------                  |-----------------------------------|
| id                   | Int                        | Unique identifier for the user     |
| username             | String                     | User's username                    |
| email                | String                     | User's email address               |
| password             | String                     | User's password                    |
| role                 | Role                       | User's role (default: user)        |
| createdAt            | DateTime                   | Date and time of user creation     |
| updatedAt            | DateTime                   | Date and time of last update       |
| recipe               | Recipe[]                   | Array of associated recipes        |
| comment              | Comment[]                  | Array of associated comments       |
| rating               | Rating[]                   | Array of associated ratings        |
| profile              | Profile[]                  | Array of associated profiles       |
 
 


