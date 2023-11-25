const { prisma } = require("../config/config");

const addUserProfile = async(req, res) => {
    try {
        const { firstName, lastName, bio, avatar, facebookLink, youtubeLink, twitterLink, githubLink } = req.body;
        const userId = req.existUser.id
        const UserProfile = await prisma.profile.create({
            data: {
                firstName: firstName,
                lastName: lastName,
                bio: bio,
                avatar: avatar,
                facebookLink: facebookLink,
                youtubeLink: youtubeLink,
                twitterLink: twitterLink,
                githubLink: githubLink,
                userId: userId
            }
        })
        if (!UserProfile) {
            return res.json({
                status: false,
                message: 'unseccessfully'
            })
        }

        res.json({
            status: true,
            message: 'seccessfully'
        })

    } catch (error) {
        res.json({
            status: false,
            message: `${error.message}`
        })
    }
}

const updateUserProfile = async(req, res) => {
    try {
        const id = req.existUser.id;
        const { firstName, lastName, bio, avatar, facebookLink, youtubeLink, twitterLink, githubLink } = req.body;
        const existUserProfile = await prisma.profile.findUnique({
            where: {
                userId: id
            }
        })

        if (!existUserProfile) {
            return res.json({
                status: false,
                message: 'not found'
            })
        }
        const UserProfile = await prisma.profile.update({
            where: {
                userId: id
            },
            data: {
                firstName: firstName,
                lastName: lastName,
                bio: bio,
                avatar: avatar,
                facebookLink: facebookLink,
                youtubeLink: youtubeLink,
                twitterLink: twitterLink,
                githubLink: githubLink,
            }
        })
        if (!UserProfile) {
            return res.json({
                status: false,
                message: 'unseccessfully'
            })
        }

        res.json({
            status: true,
            message: 'seccessfully'
        })

    } catch (error) {
        res.json({
            status: false,
            message: `${error.message}`
        })
    }
}

const deleteUserProfile = async(req, res) => {
    try {
        const id = req.existUser.id;
        const existUserProfile = await prisma.profile.findUnique({
            where: {
                userId: id
            }
        })

        if (!existUserProfile) {
            return res.json({
                status: false,
                message: 'not found'
            })
        }
        const UserProfile = await prisma.profile.delete({
            where: {
                userId: id
            }
        })
        if (!UserProfile) {
            return res.json({
                status: false,
                message: 'unseccessfully'
            })
        }

        res.json({
            status: true,
            message: 'seccessfully'
        })

    } catch (error) {
        res.json({
            status: false,
            message: `${error.message}`
        })
    }
}

const fetchUsersProfile = async(req, res) => {
    try {
        const UserProfile = await prisma.profile.findMany();
        if (UserProfile.length == []) {
            return res.json({
                status: false,
                message: 'not found',
            })
        }

        res.json({
            status: true,
            UserProfile
        })

    } catch (error) {
        res.json({
            status: false,
            message: `${error.message}`
        })
    }
}


const fetchUserProfile = async(req, res) => {
    try {
        const id = req.existUser.id;
        const UserProfile = await prisma.profile.findUnique({
            where: {
                userId: id
            }
        });
        if (!UserProfile) {
            return res.json({
                status: false,
                message: 'not found',
            })
        }

        res.json({
            status: true,
            UserProfile
        })

    } catch (error) {
        res.json({
            status: false,
            message: `${error.message}`
        })
    }
}

module.exports = {
    addUserProfile,
    updateUserProfile,
    deleteUserProfile,
    fetchUserProfile,
    fetchUsersProfile
}