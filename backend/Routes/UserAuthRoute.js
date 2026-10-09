const {Signup} = require("../controller/UserAuthController");
const router = require("express").Router();

router.post("/Signup", Signup)

module.exports = router;