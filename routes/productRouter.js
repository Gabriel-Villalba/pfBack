const { Router } = require("express");
const productRouter = Router()
const { getProducts, getProduct, createProduct, updateProduct, deleteProduct } = require("../controllers")

productRouter.post("/create", createProduct)
productRouter.get("/:id" , updateProduct )