const {Signup, Login} = require("../controller/UserAuthController");
const { authMiddleware } = require("../Middleware/AuthMiddleware");
const router = require("express").Router();

router.post("/Signup", Signup);
router.post("/Login", Login);
router.get("/user", authMiddleware, (req, res) => {
    res.json({ success: true, user: req.user.username });
});


module.exports = router;