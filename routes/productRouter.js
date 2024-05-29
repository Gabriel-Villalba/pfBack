const { Router } = require("express");
const productRouter = Router()
const { getProducts, getProduct, createProduct, updateProduct, deleteProduct } = require("../controllers")

productRouter.post("/create", createProduct)
productRouter.get("/" , getProduct )
productRouter.put ("/:id" , updateProduct) 
productRouter.delete ("/:id" , deleteProduct) // borrado logico

module.exports = productRouter