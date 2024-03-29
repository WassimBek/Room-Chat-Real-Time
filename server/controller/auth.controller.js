const createToken = require("../utils/generateToken");

module.exports.register = async(req , res) => {
    const prisma = req.prisma ;
    const {username , name , email , password , profile_picture} = req.body ;
    try {
        const user = await prisma.user.create({
            email : email,
            name : name,
            username : username,
            password : password,
            profile_picture : profile_picture
        })
        const token = await createToken(user.id) ;
        return res.status(201).json({
            status : true ,
            message : 'user creation successfully' ,
            token : token
        })
    } catch (error) {
        console.error(error) ;
        return res.status(500).json({
            status : false ,
            message : 'user creation failed' ,
            error : error.message
        })
    }
}