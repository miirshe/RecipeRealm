const { prisma, jwt_secret } = require("../config/config");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const register_user = async(req, res) => {
    try {
        const { username, email, password, role, bio, profile } = req.body;
        const existUser = await prisma.users.findUnique({
            where: {
                email: email
            }
        })

        if (existUser) {
            res.json({
                status: false,
                message: 'user already exists'
            })
        } else {

            const hassedPassword = await bcrypt.hash(password, 10)
            const adduser = await prisma.users.create({
                data: {
                    username: username,
                    email: email,
                    password: hassedPassword,
                    role: role,
                    bio: bio,
                    profile: profile
                }
            })

            if (adduser) {
                res.json({
                    status: true,
                    message: 'successfully registered...'
                })
            } else {
                res.json({
                    status: false,
                    message: 'something went wrong try again...'
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

const login_user = async(req, res) => {
    try {

        const { email, password } = req.body;
        const existUser = await prisma.users.findUnique({
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

module.exports = {
    register_user,
    login_user
}