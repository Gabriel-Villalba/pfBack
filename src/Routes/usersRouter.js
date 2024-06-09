const { Router } = require("express");
const usersRouter = Router()
const {loginHandler, registerHandler } = require("../controllers/users")
//const { check } = require("express-validator")

usersRouter.post("/create", registerHandler)// crear usuario
usersRouter.post("/login", loginHandler)// accede al sistema



 
// usersRouter.get ("/", getUsers) // listar usuarios
// usersRouter.put ("/:id" , updateUser) // modificar usuarios
// usersRouter.delete ("/:id" , deleteUser) // borrado logico

module.exports = usersRouter

