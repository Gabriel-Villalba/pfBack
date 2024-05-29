const { Router } = require("express");
const usersRouter = Router()
const { getUsers, getUser, createUser, updateUser, deleteUser } = require("../controllers/users")
const { check } = require("express-validator")

usersRouter.post("/create", createUser)// crear usuario
usersRouter.get ("/", getUsers) // listar usuarios
usersRouter.put ("/:id" , updateUser) // modificar usuarios
usersRouter.delete ("/:id" , deleteUser) // borrado logico
