const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()
const jwt_secret = process.env.RecipeRealDB_jwt_key_secret
module.exports = {
    prisma,
    jwt_secret
}