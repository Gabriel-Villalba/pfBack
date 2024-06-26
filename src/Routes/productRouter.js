const { Router } = require("express");
const productRouter = Router()
const { getProducts, getProduct, createProduct, updateProduct, deleteProduct } = require("../controllers/product")

productRouter.post("/create", createProduct)
productRouter.get("/:id" , getProduct )
productRouter.put ("/:id" , updateProduct) 
productRouter.delete ("/delete:id" , deleteProduct) // borrado logico
module.exports = productRouter
