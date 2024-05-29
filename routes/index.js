const { Router } = require("express");

const router = Router();

router.use('/users', users);
router.use('/product', product)
router.use('/products', products)
router.use('/categories', categories);
router.use('/administrator', administrator);
router.use('/sales', sales);
router.use('/stock',stock);
router.use('/record',record);
router.use('/login',login);