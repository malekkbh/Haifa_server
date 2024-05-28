const { Router } = require("express");
const { createUser } = require("../Controllers/user.controller");

const userRouter = Router();

userRouter.post("/createUer", createUser);
// userRouter.post("/createUer", (req, res) => createUser(req, res));

module.exports = userRouter
