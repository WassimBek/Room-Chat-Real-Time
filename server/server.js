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
  // room
  socket.on("join_room" , (room) => {
      socket.join(room) ;
  })

  socket.on('send_message' , (message) => {

    socket.to(message.room.id).emit("recieve_message" , 
      message
    )
  } )

  socket.on("delete_room" , (room) => {
    socket.to(room).emit("delete_single" , room)
  })

  socket.on("leave" , ({user_id , room_id}) => {

    socket.to(room_id).emit("leave_room" , user_id)
  })

  // video chat






  // disconnect connection
  socket.on("disconnect" , () => {
    console.log(`Connection closed`) ;
  }) ;
})