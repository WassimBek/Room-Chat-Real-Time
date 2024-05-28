const otpGenerator = require("otp-generator") ;
module.exports.createRoom = async (req , res) => {
    const prisma = req.prisma ;
    const {title} = req.body ;
    const generateCode = otpGenerator.generate(6 , {
        digits: true,
        alphabets: false,
        specialChars: false,
        lowerCaseAlphabets : false ,
        upperCaseAlphabets : false ,
    })
    try {
        const room = await prisma.room.create({
            data : {
                title : title,
                user : {
                    connect : {
                        id : req.user.id
                    }
                },
                room_code : {
                    create : {
                        code : Number(generateCode),
                    }
                }
            } ,
            include : {
                user : true ,
                room_code : true ,
            }
        })
        return res.status(201).json({
            status : true ,
            message : "Room created successfully",
            room : room
        })
    } catch (error) {
        return res.status(500).json({
            status : false ,
            message : "Room creation failed",
            error : error.message,
        })
    }
}

module.exports.removeRoom = async(req , res) => {
    const {id_room} = req.params ;
    const prisma = req.prisma ;
    try {
        const room = await prisma.room.delete({
            where : {
                id : id_room ,
            },
            include : {
                user : true ,
                room_code : true ,
            }
        })
        return res.status(200).json({
            status : true ,
            message : "Room deleted successfully",
            room : room,
        })
    } catch (error) {
        return res.status(500).json({
            status : false ,
            message : "Room deletion failed",
            error : error.message,
        })
    }
}

module.exports.joinRoom = async(req , res) => {
    const prisma = req.prisma ;
    try {
        const room = await prisma.room.update({
            where : {
                id : req.room.id ,
            },
            data : {
                user : {
                    connect : {
                        id : req.user.id
                    }
                }
            },
            include : {
                user : true ,
                room_code : true ,
            }
        })
        return res.status(200).json({
            status : true ,
            message : "Room joined successfully",
            room : room,
        })
    } catch (error) {
        return res.status(500).json({
            status : false ,
            message : "Room joining failed",
            error : error.message,
        })
    }
}

module.exports.leaveRoom = async(req , res) => {
    const prisma = req.prisma ;
    try {
        const room = await prisma.room.update({
            where : {
                id : req.params.id_room ,
            },
            data : {
                user : {
                    disconnect : {
                        id : req.user.id
                    }
                }
            },
            include : {
                user : true ,
                room_code : true ,
            }
        })
        return res.status(200).json({
            status : true ,
            message : "Room left successfully",
            room : room,
        })
    } catch (error) {
        return res.status(500).json({
            status : false ,
            message : "Room leaving failed",
            error : error.message,
        })
    }
}

module.exports.getRooms = async(req , res) => {
    const prisma = req.prisma ;
    try {
        const room = await prisma.user.findUnique({
            where : {
                id : req.params.id_user ,
            },
            include : {
                room : true ,
            }
        })
        return res.status(200).json({
            status : true ,
            message : "Room retrieved successfully",
            room : room,
        })
    } catch (error) {
        return res.status(500).json({
            status : false ,
            message : "Room retrieval failed",
            error : error.message,
        })
    }
}