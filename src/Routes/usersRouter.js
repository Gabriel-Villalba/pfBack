const { Router } = require("express");
const usersRouter = Router()
<<<<<<< HEAD
const { getUsers, getAllUsers, newUser, updateUser, deleteUser } = require("../controllers/users")
//const { check } = require("express-validator")

usersRouter.post("/createUser", newUser)// crear usuario
usersRouter.get ("/", getAllUsers) // listar usuarios
usersRouter.get ("/:Nombre", getUsers)
=======
const { } = require("../controllers/users")
//const { check } = require("express-validator")

// usersRouter.post("/create", registerHandler)// crear usuario
// usersRouter.post("/login", loginHandler)// accede al sistema



 
// usersRouter.get ("/", getUsers) // listar usuarios
>>>>>>> a4aa3d9ccb0cc38e6b2b1515dc33e5f119b22ddd
// usersRouter.put ("/:id" , updateUser) // modificar usuarios
// usersRouter.delete ("/:id" , deleteUser) // borrado logico

module.exports = usersRouter

