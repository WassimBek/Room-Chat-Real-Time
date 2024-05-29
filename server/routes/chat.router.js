const {Router} = require("express")
const router = Router() ;
const checkAuth = require("../middleware/checkAuth.middleware") ;

router
    .route("/add/:id_room")
    .post(checkAuth)

router
    .route("/get/:id_room")
    .get(checkAuth)

router
    .route("/delete/:id_room")
    .delete(checkAuth)
module.exports = router ;