const {Router} = require("express") ;
const router = Router() ;
const authController = require("../controller/auth.controller")
const checkUser = require("../middleware/checkUser.middleware")
const {otpVerification} = require("../controller/otp.controller")
const {isVerified} = require("../middleware/isVerified") ;
router
    .route("/register")
    .post(checkUser , authController.register) ;

router
    .route("/login")
    .post(authController.login) ;

router
    .route("/otp-verification")
    .get( isVerified , otpVerification) ;
module.exports = router ;
