const { Router } = require("express");
const authRouter = require("./auth.routes.js");
const taskRouter = require("./task.routes.js");
const router = Router();

router.use("/auth", authRouter);
router.use("/task", taskRouter);

module.exports = router;