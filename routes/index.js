const { Router } = require("express");

const router = Router();

router.use('/users', users);
router.use('/product', product)
router.use('/products', products)
router.use('/categories', categories);
router.use('/administrator', administrator);
router.use('/sales', sales);//ventas
router.use('/stock',stock);
router.use('/record',record);// registro
router.use('/login',login);
router.use('/report',report);// reportes

module.exports = router