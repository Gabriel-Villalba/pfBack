const { Router } = require("express");
const productCartRouter = Router()
const{getAllProductsInCart,addProductToCart ,deleteProductsCart }= require("../controllers/productCart")

productCartRouter.post("/addProduct" ,addProductToCart )
productCartRouter.get("/getAllProducts" ,getAllProductsInCart)
productCartRouter.delete("/deleteProducts" ,deleteProductsCart)

module.exports = productCartRouter
