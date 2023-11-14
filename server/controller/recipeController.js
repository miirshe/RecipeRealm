const { prisma } = require("../config/config");


// add recipe controller
const add_recipe = async(req, res) => {

    try {

        const { title, description, cookingInst, ingredientName, categoryName } = req.body;
        const userId = req.existUser.id
        const add_recipe = await prisma.recipe.create({
            data: {
                title: title,
                description: description,
                cookingInst: cookingInst,
                ingredientName: ingredientName,
                categoryName: categoryName,
                userId: userId
            }
        })

        if (!add_recipe) {
            return res.json({
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
        return res.json({
            status: false,
            message: `${error.message}`
        })
    }

}


// fetch all recipes controller

const fetch_recipes = async(req, res) => {
    try {
        const fetch_recipes = await prisma.recipe.findMany();
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
        const fetch_recipe = await prisma.recipe.findMany({
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



// update recipe by req.parama.id


const update_recipe = async(req, res) => {
    try {

        const { title, description, cookingInst, ingredientName, categoryName } = req.body;
        const userId = req.existUser.id
        const id = Number(req.params.id);
        const existRecipe = await prisma.recipe.findUnique({
            where: {
                id: id
            }
        })

        if (!existRecipe) {
            return res.json({
                status: false,
                message: 'recipe not exist...'
            })
        }

        const update_recipe = await prisma.recipe.update({
            where: {
                id: Number(req.params.id),
            },
            data: {
                title: title,
                description: description,
                cookingInst: cookingInst,
                ingredientName: ingredientName,
                categoryName: categoryName,
                userId: userId
            }
        })

        if (!update_recipe) {

            return res.json({
                status: false,
                message: 'something went wrong...'
            })

        }
        res.json({
            status: true,
            message: 'successfull updated recipe...'
        })


    } catch (error) {

        return res.json({
            status: false,
            message: `${error.message}`
        })

    }
}



// reomve recipe by id

const remove_recipe = async(req, res) => {

    try {

        const remove_recipe = await prisma.recipe.delete({
            where: {
                id: Number(req.params.id)
            }
        })

        if (!remove_recipe) {
            res.json({
                status: false,
                message: 'your recipe is empty...'
            })
        } else {
            res.json({
                status: true,
                message: 'successfull deleted recipe...'
            })
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
    fetch_recipe,
    update_recipe,
    remove_recipe
}