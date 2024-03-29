const isValidEmail = require("../utils/isValidEmail")

module.exports = async (req , res , next) => {
    const {password , email} = req.body ;
    if (!isValidEmail(email)) {
        return res.status(400).json({
            status : false ,
            message : {
                email : "not a valid email" ,
            } ,
        })
    }
    if (password.length <= 8) {
        return res.status(400).json({
            status : false ,
            message : {
                password : "password need be more than 8 characters" ,
            } ,
        }) ;
    }
    
    const user = await prisma.user.findOne({
        where : {
            email : email 
        }
    })
    if (user) {
        return res.status(409).json({
            status : false ,
            message : {
                email : "this email is already registered" ,
            } ,
        })
    }
    next() ;
}