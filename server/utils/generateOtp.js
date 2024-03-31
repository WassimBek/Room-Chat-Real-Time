const otpGenerator = require("otp-generator") ;

const date = new Date() ;
const TIME_EXPIRED = new Date(date.getTime() + 1000 * 60 * 5) ;

module.exports = async(user_id , prisma) => {
    const otp = otpGenerator.generate(6 , {
        digits: true,
        alphabets: false,
        specialChars: false,
        lowerCaseAlphabets : false ,
        upperCaseAlphabets : false ,
    })
    try {
        const userOtp = await prisma.otp.create({
            data : {
                user_id : user_id,
                otp_code : Number(otp),
                expired_at : TIME_EXPIRED 
            }
        })
        return otp ;
    } catch (error) {
        return res.status(404).json({
            status : false ,
            message : error.message
        }) ;
    }    
}