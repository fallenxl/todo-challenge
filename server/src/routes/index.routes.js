const { Router } = require("express");
const passport = require("passport");
const authRouter = require("./auth.routes.js");
const taskRouter = require("./task.routes.js");
const router = Router();

router.use("/auth", authRouter);
router.use(
  "/task",
  passport.authenticate("jwt", { session: false }),
  taskRouter
);

module.exports = router;
