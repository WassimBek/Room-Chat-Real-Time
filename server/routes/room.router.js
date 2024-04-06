const {Router} = require("express");
const checkAuth = require("../middleware/checkAuth.middleware")
const roomController = require("../controller/room.controller");
const router = Router() ;

router
    .route("/create")
    .post( checkAuth , roomController.createRoom) ;

router
    .route("/remove/:id_room")
    .delete(checkAuth , roomController.removeRoom) ; 

router
    .route("/join/:id_room")
    .post(checkAuth , roomController.joinRoom) ;

router
    .route("/leave/:id_room")
    .delete()

module.exports = router ;