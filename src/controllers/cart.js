const{Cart, User} = require ("../db.js")

const createCart = async (req, res) => {
  try {
    
    const { idUser } = req.body;

    if (!idUser) {
      return res.status(400).send("Completar los campos obligatorios");
    }

    // Crear un nuevo carrito
    const newCart = await Cart.create({
      idsProduct: 0,
      amount: 0
    });
    const id = idUser
    // Asociar el carrito al usuario
    const user = await User.findByPk(id);
    if (!user) {
      return res.status(404).send("Usuario no encontrado");
    }

    await newCart.setUser(user);
    await user.setCart(newCart)

    return res.status(200).json(newCart);
  } catch (error) {
    console.error("Error al crear el carrito:", error.message);
    //return res.status(500).send("Error interno del servidor");
  }
};


const getCart = async (req, res) => {

}

const addProductToCart = async (req, res) => {
  const {productId, amount} = req.body;
  const userId = req.user.id;
  try {
    //*verifico si el usuario existe
    const user = await User.findByPk(userId);
    if (!user) return res.status(404).json({ message: "User not found"})
      const cart = await Cart.findOne({ where: { userId } });
      //**si no tiene carrito le creo uno */
      if (!cart) {
        createCart(user)
      } else {
        //*si ya tiene carrito le agrego el producto
          const productInCart = await cart.getProducts({ where: { id_products: productId } });
          if (productInCart.length > 0) {
               await productInCart[0].setamount(amount + productInCart[0].cantProducts);
            } else {
              await cart.addProduct(productId, { through: { amount } });
            }
        }
      res.json({ message: "Product added to cart successfully" });
    } catch (error) {
                console.error(error);
                res.status(500).json({ message: "Error adding product to cart" });
    }
  
  }         


  const deleteCart = async (req, res) => {
    const {productId} = req.body;
    const userId = req.user.id;
  
    try {
      const user = await User.findByPk(userId);
      if (!user) return res.status(404).json({ message: "User not found"
        });

    } catch {
      console.error(error);
    } 
  }


 

  module.exports = {createCart, deleteCart, getCart, addProductToCart}