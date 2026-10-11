const {Signup, Login} = require("../controller/UserAuthController");
const { userVerification } = require("../Middleware/AuthMiddleware");
const router = require("express").Router();

router.post("/Signup", Signup);
router.post("/Login", Login);
router.post("/", userVerification);


module.exports = router;