const jwt = require("jsonwebtoken");
const { jwt_secret } = require("../config/config");
const userAuthenticate = (req, res, next) => {
    try {

        const token = req.headers.authorization || req.cookies.userToken;

        if (!token) {
            return res.json({
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