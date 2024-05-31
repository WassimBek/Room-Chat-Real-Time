const app = require("./app") ;
require("dotenv").config() ;

const PORT = Number(process.env.PORT) || 3000 ;

const server = app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`) ;
}) ;

const io = require("socket.io")(server , {
  cors : {
    origin : "*"
  }
}) ;

io.on("connection" , (socket) => {
  console.log(`Connection established`) ;

  socket.on("join_room" , (room) => {
    console.log(`User joined room`) ;
    socket.join(room.room)
  })

  socket.on('send-message' , (message) => {
    console.log('here') ;
    console.log(message) ;
    const body = {
      message : message.message ,
      user : {userame : message.username , id : message.user.id}  
    }
    socket.to(message.room.id).emit("recieve_message", body)
  } )
  socket.on("disconnect" , () => {
    console.log(`Connection closed`) ;
  }) ;
})