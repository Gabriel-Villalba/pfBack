const { Router } = require("express");
const users = require("./usersRouter.js");
const product = require("./productRouter.js");
const products = require("./productsRouter.js");
const categories = require("./categoriesRouter.js");
const login = require("./loginRouter.js");

const router = Router();

router.get('/', (req, res) => {
    res.send('Hello World!');
});

router.use('/users', users);
router.use('/product', product);
router.use('/products', products);
router.use('/categories', categories);
router.use('/login', login);

module.exports = router;
