const {Router} = require("express");
const roomController = require("../controller/room.controller");
const checkAuth = require("../middleware/checkAuth.middleware")
const router = Router() ;

router
    .route("/create")
    .post( checkAuth , roomController.createRoom)

router
    .route("/delete")
    .delete() 

router
    .route("/join/:id_room")
    .post()

router
    .route("/leave/:id_room")
    .delete()

module.exports = router ;