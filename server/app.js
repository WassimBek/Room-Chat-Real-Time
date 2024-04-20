const express = require("express") ;
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient() ;
const app = express() ;
const authRouter = require("./routes/auth.router") ;
const roomRouter = require("./routes/room.router") ;
const handelExpiredOtp = require("./middleware/removeExpiredOtp");
const morgan = require("morgan") ;
const cors = require("cors") ;
app.use(cors({
    origin: "http://localhost:5173"
}))

app.use(express.json()) ;
app.use(morgan("dev")) ;
app.use( (req , res , next) => {
    req.prisma = prisma ;
    next() ;
})
// app.use(handelExpiredOtp) ;
// app.use( async (req , res , next) => {
//     // delete all user 
//     await  prisma.user.deleteMany() ;
//     await prisma.otp.deleteMany() ;
//     await prisma.room.deleteMany() ;
//     await prisma.room_code.deleteMany() ;
//     return res.json({
//         message : 'delete done'
//     })
// })

app.use("/auth" , authRouter) ;
app.use("/room" , roomRouter) ;
module.exports = app ;