const jwt = require("jsonwebtoken");
const { jwt_secret } = require("../config/config");
const userAuthenticate = (req, res, next) => {
    try {

        const token = req.cookies.userToken;

        if (!token) {
            res.json({
                status: false,
                message: 'un authorized'
            })
        }

        const decoded = jwt.verify(token, jwt_secret);
        req.existUser = decoded;
        next();

    } catch (error) {
        res.json({
            status: false,
            message: `error : ${error.message}`
        })
    }
}

module.exports = userAuthenticate