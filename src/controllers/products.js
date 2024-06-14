const { Product, Category } = require("../db.js");

// traigo todos los productos de la db
const getProducts = async (req , res) => {
  try {
    
    const products = await Product.findAll({
      include: {
        //Incluime el model Category
        model: Category,
        //TRAEME EL ATRIBUTO NAME
        attributes: ["name"],
        
        through: {},
      },
    });
    return res.status(200).json(products);
    
  } catch (error) {
    return res.status(500).send("Error interno del servidor");
  }
};

module.exports = getProducts;
