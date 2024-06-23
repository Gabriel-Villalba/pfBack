const { Router } = require("express");
const users = require ("./usersRouter.js")
const product = require ("./productRouter.js")
const products = require ("./productsRouter.js")
const categories = require ("./categoriesRouter.js")
//const sales = require ("./salesRouter.js")
//const stock = require ("./stockRouter.js")
//const record = require ("./recordRoutes.js")
const login = require ("./loginRouter.js")
//const report = require ("./reportRouter.js")
const login = require ("./loginRouter.js")
const cart = require ("./cartRouter.js")
const productCart = require ("./productCartRouter.js")
const mp = require ("./mp.js")

const router = Router();

router.get('/', (req, res) => {
    res.send('Hello World!');
});

router.use('/users', users);
router.use('/product', product)
router.use('/products', products)
router.use('/categories', categories);
//router.use('/sales', sales);//ventas
//router.use('/stock',stock);
//router.use('/record',record);// registro
//router.use('/report',report);// reportes
router.use('/productCart',productCart);// registro
router.use('/login', login);
router.use('/cart', cart);
router.use('/mp', mp);


module.exports = router