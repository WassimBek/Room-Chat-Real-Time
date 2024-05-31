const express = require("express") ;
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient() ;
const app = express() ;
const authRouter = require("./routes/auth.router") ;
const roomRouter = require("./routes/room.router") ;
const messageRouter = require("./routes/message.router") ;
const handelExpiredOtp = require("./middleware/removeExpiredOtp");
const morgan = require("morgan") ;
const cors = require("cors") ;
app.use(cors())

app.use(express.json()) ;
app.use(morgan("dev")) ;
app.use( (req , res , next) => {
    req.prisma = prisma ;
    next() ;
})

app.use("/auth" , authRouter) ;
app.use("/room" , roomRouter) ;
app.use("/chat" , messageRouter) ;
module.exports = app ;