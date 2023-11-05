const { prisma } = require("../config/config");


// add recipe controller
const add_recipe = async(req, res) => {

    try {

        const { title, description, cookingInst, nutritionInfo } = req.body;
        const userId = req.existUser.id
        console.log('useId', userId)
        const add_recipe = await prisma.recipes.create({
            data: {
                title: title,
                description: description,
                cookingInst: cookingInst,
                nutritionInfo: nutritionInfo,
                userId: userId
            }
        })

        if (!add_recipe) {
            res.json({
                status: false,
                message: 'something went wrong...'
            })
        } else {
            res.json({
                status: true,
                message: 'successfull added recipe...'
            })
        }

    } catch (error) {
        res.json({
            status: false,
            message: `${error.message}`
        })
    }

}


// fetch all recipes controller

const fetch_recipes = async(req, res) => {
    try {

        const fetch_recipes = await prisma.recipes.findMany();

        if (fetch_recipes.length == []) {

            res.json({
                status: false,
                message: 'recipes is empty...'
            })
        } else {
            res.json({
                fetch_recipes
            })
        }

    } catch (error) {

        res.json({
            status: false,
            message: `${error.message}`
        })
    }
}


// fetch single recipes by filtering with user 


const fetch_recipe = async(req, res) => {
    try {

        const userId = req.existUser.id;
        const fetch_recipe = await prisma.recipes.findMany({
            where: {
                userId: userId
            }
        })

        if (fetch_recipe.length == []) {
            res.json({
                status: false,
                message: 'recipes is empty...'
            })
        } else {
            fetch_recipe
        }

    } catch (error) {

        res.json({
            status: false,
            message: `${error.message}`
        })

    }
}


module.exports = {
    add_recipe,
    fetch_recipes,
    fetch_recipe
}