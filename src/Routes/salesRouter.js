const { Router } = require("express");
const { getSale, getSales, createSales, updateSales, deleteSales } = require("../controllers/users")

const salesRouter = Router()
const { Sales } = require("../models/Sales")
const { SalesProducts } = require("../models/SalesProducts")
const { Products } = require("../models/Products")
const { SalesProductsController } = require("../controllers/SalesProductsController")
const { SalesController } = require("../controllers/SalesController")
const { ProductsController } = require("../controllers/ProductsController")

salesRouter.get("/", getSales)
salesRouter.get("/:id", getSale)
salesRouter.post("/", createSales)
salesRouter.put("/:id", updateSales)
salesRouter.delete("/:id" , deleteSales)

module.exports = salesRouter