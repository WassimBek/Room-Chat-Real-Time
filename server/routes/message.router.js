const {Router} = require("express")
const router = Router() ;
const checkAuth = require("../middleware/checkAuth.middleware") ;
const messageController = require("../controller/chat.controller")
router
    .route("/add/:id_room")
    .post(checkAuth , messageController.createMessage)

router
    .route("/get/:id_room")
    .get(checkAuth , messageController.getRoomMessages)

router
    .route("/delete/:id_room")
    .delete(checkAuth)
module.exports = router ;