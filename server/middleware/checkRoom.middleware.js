module.exports = async(req , res , next) => {
    const prisma = req.prisma ;
    const {room_code} = req.body ;
    try {
        const room = await prisma.room_code.findFirst({
            where : { 
                code : room_code 
            } ,
            include : {
                room : true ,
            }
        })
        if (room) {
            req.room = room.room ;
            next() ;
        }else
            throw new Error("Code not exist for room") ;
    } catch (error) {
        console.error(error.message) ;
        return res.status(500).json({
            status : false ,
            message : error.message
        })
    }
}