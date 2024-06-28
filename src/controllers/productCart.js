const {Product, ProducCart} = require("../db.js");

 //**************AGREGAR PRODUCTOS**************************** */

exports.addProductToCart = async (req, res) => {
    try {
        const amount = req.body.quantity
        const {  id_products, idCart } = req.body;

        const existingProduct = await validateProductsInCart(idCart, id_products)
        console.log(existingProduct)
        if ( !existingProduct) {
            const newProduct = await ProducCart.create({
                id_products,
                amount,
                idCart,
            });
            console.log("guardado con exito")
            res.status(201).json(newProduct);

        } else {
            res.status(201).json({ message: "El producto ya existe en el carrito" });
            
        }

    } catch (error) {
        console.error('Error al agregar el producto al carrito:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
};

//**************OBTENER PRODUCTOS**************************** */

exports.getAllProductsInCart = async (req, res) => {
    try {
        const { idCart } = req.params; 
        console.log(idCart)
        const productsInCart = await ProducCart.findAll({
            where: { idCart },
            include: { 
                model: Product,
                attributes: ['id','Nombre','Precio', 'Stock', 'Imagen_URL', 'onOffer', 'Brand']
        }
    });
    const simplifiedResponse = productsInCart.map(item => ({   
        ...item.Product.dataValues,
        amount: item.amount,
        id: item.id
    }));
    //console.log(simplifiedResponse),
        res.status(200).json(simplifiedResponse);
    } catch (error) {
        console.error('Error al obtener los productos del carrito:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
};
//********************delete carrito************************** */

exports.deleteProductsCart= async (req, res) => {
    try {
        const { idCart } = req.params;
        await ProducCart.destroy({
            where: { idCart },
            });
            res.status(200).json({ message: 'Carrito eliminado con éxito' });
            } catch (error) {
                console.error('Error al eliminar el carrito:', error);
                res.status(500).json({ error: 'Error interno del servidor' });
            }

}

exports.deleteOneProductCart= async (req, res) => {
    try {
        const { id } = req.params;
        await ProducCart.destroy({
            where: { id },
            });
            res.status(200).json({ message: 'Carrito eliminado con éxito' });
            } catch (error) {
                console.error('Error al eliminar el carrito:', error);
                res.status(500).json({ error: 'Error interno del servidor' });
            }

}


const validateProductsInCart = async (idCart, id_products) => {
    try {
       // console.log(idCart);
        //console.log(id_products);
        const productsInCart = await ProducCart.findAll({
            where: { idCart },
        });
        const productExists = productsInCart.filter(product => product.dataValues.id_products === id_products);
        //console.log(productExists)
        if (productExists.length > 0) {
            console.log('El producto Pepe ya está en el carrito.');
            return true;
        } else {
            console.log('El producto no está en el carrito.');
            return false;
        }
    } catch (error) {
        console.error('Error al eliminar el carrito:', error);
        // res.status(500).json({ error: 'Error interno del servidor' });
    }
};





