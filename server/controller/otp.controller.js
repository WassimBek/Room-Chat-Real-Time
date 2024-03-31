module.exports.otpVerification = async(req , res) => {
    const prisma = req.prisma ;
    const otp = req.otp ;
    try {
        if (otp.otp_code === req.body.otp) {
            const updateUserVerification = await prisma.otp.update({
                where : {
                    id : otp.id ,
                },
                data : {
                    verify_code : true ,
                }
            })
            return res.status(200).json({
                status : true ,
                message : 'otp verified successfully' 
            })
        }else {
            throw new Error('invalid otp code') ;
        }
        
    } catch (error) {
        return res.status(500).json({
            status : false ,
            message : 'otp verification failed' ,
            error : error.message
        })
    }
}