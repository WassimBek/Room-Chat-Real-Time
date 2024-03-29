const {Router} = require("express") ;
const router = Router() ;
const authController = require("../controller/auth.controller")
const checkUser = require("../middleware/checkUser.middleware")

router
    .route("/register")
    .post(checkUser , authController.register) ;

router
    .route("/login")
    .get(authController.login) ;

module.exports = router ;
