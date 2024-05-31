

module.exports.createMessage = async(req , res) => {
    const prisma = req.prisma ;
    const {message : messageContent} = req.body ;
    const {id_room} = req.params ;
    try {
        const message = await prisma.message.create({
            data : {
                message : messageContent,
                user : {
                    connect : {
                        id : req.user.id
                    }
                },
                room : {
                    connect : {
                        id : id_room
                    }
                }
            },
            include : {
                user : true
            }
        })
        return res.status(201).json({
            message : 'Room created succefully ' ,
            data : message ,
            status : true
        })
    } catch (error) {
        return res.status(500).json({
            message : error.message,
            status : false
        })
    }
}

module.exports.getRoomMessages = async(req , res) => {
    const prisma = req.prisma ;
    const {id_room} = req.params ;
    try {
        const messages = await prisma.message.findMany({
            where : {
                room : {
                    id : id_room
                }
            },
            include : {
                user : true
            },
            orderBy : {
                created_at : "asc"
            }
        })
        return res.status(200).json({
            status : true,
            message : "Messages recieved successfully",
            data : messages
        })
    } catch (error) {
        console.log(error.message)
        return res.status(500).json({
            status : false,
            message : error.message
        })
    }
}