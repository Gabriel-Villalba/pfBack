const { Router } = require("express");
const productRouter = Router()
const {getProduct, createProduct, updateProduct, deleteProduct } = require("../controllers/product")

productRouter.post("/create", createProduct)
productRouter.get("/:id" , getProduct )
<<<<<<< HEAD
productRouter.put ("/:id" , updateProduct) 
productRouter.delete ("/delete:id" , deleteProduct) // borrado logico
=======
productRouter.put ("/update" , updateProduct) 
productRouter.delete ("/:id" , deleteProduct) // borrado logico
>>>>>>> a4aa3d9ccb0cc38e6b2b1515dc33e5f119b22ddd
module.exports = productRouter
