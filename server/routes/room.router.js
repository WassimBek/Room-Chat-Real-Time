const {Router} = require("express")
const router = Router() ;

router
    .route("/create")
    .post()

router
    .route("/delete")
    .delete() 

router
    .route("/join/:id_room")
    .post()

router
    .route("/leave/:id_room")
    .delete()