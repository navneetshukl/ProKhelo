const express = require("express");
const { signup, signin, getAllUsers } = require("../controllers/userController");
const userRouter = express.Router();

userRouter.post("/signup", signup);
userRouter.post("/signin", signin);
userRouter.get("/getAllUsers",getAllUsers);

module.exports = userRouter;