const { Router } = require("express");
const productsRouter = Router()
const {getProducts, getProductsAdmin } = require("../controllers/products")


productsRouter.get("/" , getProducts );
productsRouter.get("/admin" , getProductsAdmin )

module.exports = productsRouter