const { Router } = require("express");
const usersRouter = Router()
const { getUsers, getAllUsers, newUser, updateUser, deleteUser } = require("../controllers/users")
//const { check } = require("express-validator")

usersRouter.post("/createUser", newUser)// crear usuario
usersRouter.get ("/", getAllUsers) // listar usuarios
usersRouter.get ("/:Nombre", getUsers)
// usersRouter.put ("/:id" , updateUser) // modificar usuarios
// usersRouter.delete ("/:id" , deleteUser) // borrado logico

module.exports = usersRouter