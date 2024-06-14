const { Router } = require("express");
const productRouter = Router()
const {getProduct, getProductName, createProduct, updateProduct, deleteProduct } = require("../controllers/product")

productRouter.post("/create", createProduct)
productRouter.get("/:id" , getProduct )
productRouter.get("/name/:name" , getProductName )
productRouter.put ("/update" , updateProduct) 
productRouter.delete ("/:id" , deleteProduct) // borrado logico
module.exports = productRouter
