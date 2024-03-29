const express = require("express") ;
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient() ;
const app = express() ;

app.use(express.json()) ;

app.use( (req , res , next) => {
    req.prisma = prisma ;
    next() ;
})

module.exports = app ;