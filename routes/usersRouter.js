const { Router } = require("express");
const usersRouter = Router()
const { getUsers, getUser, createUser, updateUser, deleteUser } = require("../controllers/users")
const { check } = require("express-validator")

usersRouter.post("/create", createUser)
usersRouter.get ("/:id", getUsers)
usersRouter.put ("/id" , updateUser)