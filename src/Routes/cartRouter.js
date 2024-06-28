const { Router } = require("express");
const cartRouter = Router()
const { createCart, getCart , deleteCart, addProductToCart } = require("../controllers/cart")

cartRouter.get("/", getCart)
cartRouter.post("/create", createCart)
cartRouter.delete("/delete", deleteCart)
cartRouter.put("/:id" , addProductToCart)

module.exports = cartRouter
