const {Router} = require("express");
const checkAuth = require("../middleware/checkAuth.middleware") ;
const checkRoom = require("../middleware/checkRoom.middleware")
const roomController = require("../controller/room.controller");
const router = Router() ;

router
    .route("/create")
    .post( checkAuth , roomController.createRoom) ;

router
    .route("/remove/:id_room")
    .delete(checkAuth , roomController.removeRoom) ; 

router
    .route("/join")
    .post(checkAuth , checkRoom , roomController.joinRoom) ;

router
    .route("/leave/:id_room")
    .delete(checkAuth , roomController.leaveRoom) ;

router
    .route("/get-rooms")
    .get(checkAuth , roomController.getRooms) ;

router
    .route("/get-single-room/:room_id")
    .get(checkAuth , roomController.getSingleRoom) ;

module.exports = router ;