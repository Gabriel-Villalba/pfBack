const { Router } = require("express");
const mpRouter = Router()
const createPreference = require("../controllers/mp")


mpRouter.post("/createPreference",createPreference )// crear preference



module.exports = mpRouter