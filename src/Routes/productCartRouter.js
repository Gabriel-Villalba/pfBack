const { Router } = require("express");
const productCartRouter = Router()
const{getAllProductsInCart,addProductToCart ,deleteProductsCart,deleteOneProductCart }= require("../controllers/productCart")

productCartRouter.post("/addProduct" ,addProductToCart )
productCartRouter.get("/getAllProducts/:idCart" ,getAllProductsInCart)
productCartRouter.delete("/deleteProducts/:idCart" ,deleteProductsCart)
productCartRouter.delete("/deleteOneProducts/:id" ,deleteOneProductCart)

module.exports = productCartRouter
