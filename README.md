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

### ` User Routes `
```markdown
- `userRoutes.post('/user/register', UserValidation, register_user)`
- `userRoutes.post('/user/login', login_user)`
- `userRoutes.get('/users', fetch_users)`
- `userRoutes.get('/user/:id', fetch_user)`
- `userRoutes.delete('/user/:id', remove_user)`
- `userRoutes.put('/user/:id', update_user)`
```
 
 


