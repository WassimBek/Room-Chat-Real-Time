const express = require("express") ;
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient() ;
const app = express() ;
const authRouter = require("./routes/auth.router")
const handelExpiredOtp = require("./middleware/removeExpiredOtp");
app.use(express.json()) ;

app.use( (req , res , next) => {
    req.prisma = prisma ;
    next() ;
})

app.use(handelExpiredOtp) ;
app.use("/auth" , authRouter) ;
module.exports = app ;