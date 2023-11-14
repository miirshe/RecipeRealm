const { prisma } = require("../config/config");
const addNutritioninfo = async(req, res) => {
    try {

        const { recipeId, carbs, fat, calories, protein } = req.body;
        const nutrition = await prisma.nutritionInfo.create({
            data: {
                recipeId: recipeId,
                carbs: carbs,
                fat: fat,
                calories: calories,
                protein: protein
            }
        })

        if (!nutrition) {
            return res.json({
                status: false,
                message: 'unsuccessfully'
            })
        }

        res.json({
            status: true,
            message: 'successfully'
        })

    } catch (error) {
        return res.json({
            status: false,
            message: `${error.message}`
        })
    }
}
const updateNutritioninfo = async(req, res) => {
    try {

        const { recipeId, carbs, fat, calories, protein } = req.body;
        const id = Number(req.params.id);
        const existNutrition = await prisma.nutritionInfo.findUnique({
            where: {
                id: id
            }
        })
        if (!existNutrition) {
            return res.json({
                status: false,
                message: 'not found'
            })
        }
        const nutrition = await prisma.nutritionInfo.update({
            where: {
                id: id
            },
            data: {
                recipeId: recipeId,
                carbs: carbs,
                fat: fat,
                calories: calories,
                protein: protein
            }
        })

        if (!nutrition) {
            return res.json({
                status: false,
                message: 'unsuccessfully'
            })
        }

        res.json({
            status: true,
            message: 'successfully'
        })

    } catch (error) {
        return res.json({
            status: false,
            message: `${error.message}`
        })
    }
}


const fetchNutritioninfo = async(req, res) => {
    try {
        const id = Number(req.params.id);
        const existNutrition = await prisma.nutritionInfo.findUnique({
            where: {
                id: id
            }
        })
        if (!existNutrition) {
            return res.json({
                status: false,
                message: 'not found'
            })
        }
        res.json({
            status: true,
            existNutrition
        })

    } catch (error) {
        return res.json({
            status: false,
            message: `${error.message}`
        })
    }
}

const fetchNutritioninfos = async(req, res) => {
    try {

        const existNutritions = await prisma.nutritionInfo.findMany()
        if (existNutritions.length == []) {
            return res.json({
                status: false,
                message: 'not found'
            })
        }
        res.json({
            status: true,
            existNutritions
        })

    } catch (error) {
        return res.json({
            status: false,
            message: `${error.message}`
        })
    }
}


const deleteNutritioninfo = async(req, res) => {
    try {
        const id = Number(req.params.id);
        const existNutrition = await prisma.nutritionInfo.findUnique({
            where: {
                id: id
            }
        })
        if (!existNutrition) {
            return res.json({
                status: false,
                message: 'not found'
            })
        }
        const nutrition = await prisma.nutritionInfo.delete({
            where: {
                id: id
            }
        })

        if (!nutrition) {
            return res.json({
                status: false,
                message: 'unsuccessfully'
            })
        }

        res.json({
            status: true,
            message: 'successfully'
        })

    } catch (error) {
        return res.json({
            status: false,
            message: `${error.message}`
        })
    }
}

module.exports = {
    addNutritioninfo,
    updateNutritioninfo,
    fetchNutritioninfo,
    deleteNutritioninfo,
    fetchNutritioninfos,
}