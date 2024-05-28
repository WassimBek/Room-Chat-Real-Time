const jwt = require("jsonwebtoken")
module.exports = async(req , res , next) => {
    try {
        console.log("Here")
        const token = req.headers.authorization ;
        if (!token) {
            throw Error("unauthorized")
        }
        const decoded = await jwt.verify(token.split(" ")[1], process.env.JWT_SECRET) ;
        req.user = decoded ;
        next() ;
    } catch (error) {
        return res.status(500).json({
            status : false ,
            message : error.message
        })
    }
}