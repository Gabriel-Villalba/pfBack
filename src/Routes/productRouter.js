const { Router } = require("express");
const productRouter = Router()
const { getProducts, getProduct, createProduct, updateProduct, deleteProduct } = require("../controllers/product")

productRouter.post("/create", createProduct)
productRouter.get("/:Nombre" , getProduct )
productRouter.put ("/update" , updateProduct) 
productRouter.delete ("/:id" , deleteProduct) // borrado logico
module.exports = productRouter
