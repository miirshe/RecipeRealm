const { prisma, jwt_secret } = require("../config/config");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const register_user = async(req, res) => {
    try {
        const { username, email, password } = req.body;
        const existUser = await prisma.user.findUnique({
            where: {
                email: email
            }
        })

        if (existUser) {
            return res.json({
                status: false,
                message: 'user already exists'
            })
        } else {

            const hassedPassword = await bcrypt.hash(password, 10)
            const adduser = await prisma.user.create({
                data: {
                    username: username,
                    email: email,
                    password: hassedPassword,
                }
            })

            if (!adduser) {
                return res.json({
                    status: false,
                    message: 'unsuccessfully'
                })
            }
            res.json({
                status: true,
                message: 'successfully'
            })

        }

    } catch (error) {
        res.json({
            status: false,
            message: `${error.message}`
        })
    }
}

const login_user = async(req, res) => {
    try {

        const { email, password } = req.body;
        const existUser = await prisma.user.findUnique({
            where: {
                email: email,
            }
        })

        if (!existUser) {

            res.json({
                status: false,
                message: 'invalid email or password...'
            })


        } else {

            const comparePassword = await bcrypt.compare(password, existUser.password)

            if (!comparePassword) {
                res.json({
                    status: false,
                    message: 'invalid email or password...'
                })
            } else {

                const userToken = await jwt.sign({ id: existUser.id }, jwt_secret)
                res.cookie('userToken', userToken, {
                    httpOnly: true,
                    secure: false,
                    maxAge: 7 * 24 * 60 * 60 * 1000
                })

                res.json({
                    status: true,
                    message: 'successfully login...'
                })

            }


        }

    } catch (error) {

        res.json({
            status: false,
            message: `${error.message}`
        })
    }
}

const fetch_users = async(req, res) => {
    try {

        const existUsers = await prisma.user.findMany();

        if (existUsers.length == []) {

            res.json({
                status: false,
                message: 'No users found'
            })

        } else {
            res.json({
                status: true,
                message: existUsers
            })
        }

    } catch (error) {
        res.json({
            status: false,
            message: `${error.message}`
        })
    }
}

const fetch_user = async(req, res) => {
    try {
        const id = Number(req.params.id)
        const existUsers = await prisma.user.findFirst({
            where: {
                id: id
            }
        });

        if (!existUsers) {

            res.json({
                status: false,
                message: 'No user found'
            })

        } else {
            res.json({
                status: true,
                message: existUsers
            })
        }

    } catch (error) {
        res.json({
            status: false,
            message: `${error.message}`
        })
    }
}


const remove_user = async(req, res) => {
    try {
        const id = Number(req.params.id)
        const existUsers = await prisma.user.delete({
            where: {
                id: id
            }
        });

        if (!existUsers) {

            res.json({
                status: false,
                message: 'No user found'
            })

        } else {
            res.json({
                status: true,
                message: 'successfull deleted..'
            })
        }

    } catch (error) {
        res.json({
            status: false,
            message: `${error.message}`
        })
    }
}


const update_user = async(req, res) => {
    try {
        const id = Number(req.params.id)
        const { email, username } = req.body
        const existUsers = await prisma.user.update({
            where: {
                id: id
            },
            data: {
                username: username,
                email: email,
            }
        });

        if (!existUsers) {

            res.json({
                status: false,
                message: 'No user found'
            })

        } else {
            res.json({
                status: true,
                message: 'successfull updated...'
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
    register_user,
    login_user,
    fetch_users,
    fetch_user,
    remove_user,
    update_user
}