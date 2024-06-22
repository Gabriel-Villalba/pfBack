const {Product, ProducCart} = require("../db.js");

 //**************AGREGAR PRODUCTOS**************************** */

exports.addProductToCart = async (req, res) => {
    try {
        const {  id_products, amount, idCart } = req.body;
        //const pro = productId.product.id
        console.log(req.body)
        const newProduct = await ProducCart.create({
            id_products,
            amount,
            idCart,
        });

        res.status(201).json(newProduct);
    } catch (error) {
        console.error('Error al agregar el producto al carrito:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
};

//**************OBTENER PRODUCTOS**************************** */

exports.getAllProductsInCart = async (req, res) => {
    try {
        const { idCart } = req.query; 


        const productsInCart = await ProducCart.findAll({
            where: { idCart }, 
            include: { //incluyo tabla Products para taer todos los datos del producto
                model: Product,
                attributes: ['Nombre','Precio', 'Stock', 'Imagen_URL', 'onOffer', 'Brand'],
        }
    });
        res.status(200).json(productsInCart);
    } catch (error) {
        console.error('Error al obtener los productos del carrito:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
};

//********************delete carrito************************** */

exports.deleteProductsCart= async (req, res) => {
    try {
        const { idCart } = req.query;
        await ProductCart.destroy({
            where: { idCart },
            });
            res.status(200).json({ message: 'Carrito eliminado con éxito' });
            } catch (error) {
                console.error('Error al eliminar el carrito:', error);
                res.status(500).json({ error: 'Error interno del servidor' });
            }

}

