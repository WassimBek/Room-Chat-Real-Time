const generateOtp = require("../utils/generateOtp")
module.exports.createRoom = async (req , res) => {
    const prisma = req.prisma ;
    const {title} = req.body
    const code = await generateOtp(req.user.id , req.prisma) ;
    try {

        const createRoom = await prisma.room.create({
            data : {
                title : title,
                room_code : code,
                user : {
                    connect : {
                        id : req.user.id
                    }
                }
            } ,
            include : {
                user : true ,
            }
        })
        console.log(createRoom)
        return res.status(201).json({
            status : true ,
            message : 'room creation successfully' ,
            room : createRoom
        })
    } catch (error) {
        return res.status(500).json({
            status : false ,
            message : 'room creation failed' ,
            error : error.message
        })
    }
}