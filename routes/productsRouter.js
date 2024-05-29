const { Router } = require("express");
const productsRouter = Router()
const { getProducts } = require("../controllers")


productsRouter.get("/" , getProducts )

module.exports = productsRouter