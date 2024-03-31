module.exports.isVerified = async(req , res , next) => {
    const prisma = req.prisma ;
    const findOtp = await prisma.user.findUnique({
        where : {
            email : req.body.email
        } , 
        include : {
            otp : true ,
        }
    })
    console.log(findOtp)
    if (findOtp.otp.verify_code === false) {
        req.otp = findOtp.otp ;
        next() ;
    }else {
        return res.status(200).json({
            status : true ,
            message : "that's account already verified",
        })
    }
}