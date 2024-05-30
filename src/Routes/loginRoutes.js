const { Router } = require("express");
const loginRouter = Router();
const { check } = require("express-validator");
const { getUser, createUser , updateUser , deleteUser } = require("../controllers")


loginRouter.post("/create", createUser)
loginRouter.get("/:id" , getUser )
loginRouter.put("/:id", updateUser)
loginRouter.delete("/:id", deleteUser)

module.exports = loginRouter

