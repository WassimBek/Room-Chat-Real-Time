

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