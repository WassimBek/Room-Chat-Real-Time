module.exports = async(req , res , next) => {
    const date = new Date() ;
    const date_now = new Date(date.getTime());
    const prisma = req.prisma ;
    const otp = await prisma.otp.deleteMany({
        where : {
            expired_at : {
                lte : date_now
            },
            verify_code : false ,
        }
    }) ;
    next() ;
}