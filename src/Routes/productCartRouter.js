const { Router } = require("express");
const productCartRouter = Router()
const{getAllProductsInCart,addProductToCart ,deleteProductsCart }= require("../controllers/productCart")

productCartRouter.post("/addProduct" ,addProductToCart )
productCartRouter.get("/getAllProducts/:idCart" ,getAllProductsInCart)
productCartRouter.delete("/deleteProducts/:idCart" ,deleteProductsCart)

module.exports = productCartRouter
