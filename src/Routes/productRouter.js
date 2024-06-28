const { Router } = require("express");
const productRouter = Router()
const {getProduct, getProductName, createProduct, updateProduct, deleteProduct,deshacerSeleteProduct } = require("../controllers/product")

productRouter.post("/create", createProduct)
productRouter.get("/:id" , getProduct )
productRouter.get("/name/:name" , getProductName)
productRouter.put ("/update" , updateProduct) 
productRouter.delete ("/:id" , deleteProduct) // borrado logico
productRouter.delete ("/deshacer/:id" , deshacerSeleteProduct) // deshacer borrado logico

module.exports = productRouter
