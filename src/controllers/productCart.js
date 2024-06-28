const { Product, ProducCart } = require("../db.js");

//**************AGREGAR PRODUCTOS**************************** */

exports.addProductToCart = async (req, res) => {
  try {
    const amount = req.body.quantity;
    const { id_products, idCart } = req.body;
    //const pro = productId.product.id
    console.log("id cart: ", req.body);
    const newProduct = await ProducCart.create({
      id_products,
      amount,
      idCart,
    });

    res.status(201).json(newProduct);
  } catch (error) {
    console.error("Error al agregar el producto al carrito:", error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
};

//**************OBTENER PRODUCTOS**************************** */

exports.getAllProductsInCart = async (req, res) => {
  try {
    const { idCart } = req.params;
    console.log(idCart);
    const productsInCart = await ProducCart.findAll({
      where: { idCart },
      include: {
        model: Product,
        attributes: [
          "id",
          "Nombre",
          "Precio",
          "Stock",
          "Imagen_URL",
          "onOffer",
          "Brand",
        ],
      },
    });
    const simplifiedResponse = productsInCart.map((item) => ({
      ...item.Product.dataValues, // Aquí se guarda directamente el contenido de Product
      amount: item.amount,
      id: item.id,
    }));
    //console.log(simplifiedResponse),
    res.status(200).json(simplifiedResponse);
  } catch (error) {
    console.error("Error al obtener los productos del carrito:", error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
};

//********************delete carrito************************** */

exports.deleteProductsCart = async (req, res) => {
  try {
    const { idCart } = req.params;
    await ProducCart.destroy({
      where: { idCart },
    });
    res.status(200).json({ message: "Carrito eliminado con éxito" });
  } catch (error) {
    console.error("Error al eliminar el carrito:", error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
};

exports.deleteOneProductCart = async (req, res) => {
  try {
    const { id } = req.params;
    await ProducCart.destroy({
      where: { id },
    });
    res.status(200).json({ message: "Carrito eliminado con éxito" });
  } catch (error) {
    console.error("Error al eliminar el carrito:", error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
};
