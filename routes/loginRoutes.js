const { Router } = require("express");
const loginRouter = Router();
const { check } = require("express-validator");
const { getUser, getUser, createUser } = require("../controllers")


loginRouter.post("/create", createUser)
loginRouter.get("/" , getUser )



