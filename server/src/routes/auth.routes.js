const { Router } = require("express");
const passport = require("passport");
const {
  register,
  login,
  getUser,
} = require("../controllers/auth.controller.js");

const router = Router();

router.post("/register", register);
router.post("/login", login);
router.get("/user",passport.authenticate("jwt", {session: false}) ,getUser);
module.exports = router;
