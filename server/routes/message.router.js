const {Router} = require("express")
const router = Router() ;
const checkAuth = require("../middleware/checkAuth.middleware") ;
const messageController = require("../controller/chat.controller")
router
    .route("/add-message/:id_room")
    .post(checkAuth , messageController.createMessage)

router
    .route("/get-messages/:id_room")
    .get(checkAuth , messageController.getRoomMessages)

module.exports = router ;