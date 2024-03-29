const jwt = require("jsonwebtoken")
module.exports = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: "1d" ,
    })
}