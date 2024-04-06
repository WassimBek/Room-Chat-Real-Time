module.exports = async(req , res , next) => {
    const prisma = req.prisma ;
    const {room_code} = req.params ;
    try {
        const room = await prisma.room.findUnique({
            where : {
                room_code : {
                    code : room_code
                } 
            } ,
        })
        if (room) {
            req.room = room ;
            next() ;
        }
        throw new Error("Code not exist for room") ;
    } catch (error) {
        return res.status(500).json({
            status : false ,
            message : error.message
        })
    }
}