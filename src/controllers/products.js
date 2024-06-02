const { Product, Category } = require("../db");
//const {  } = require("../Models/Categories");

// traigo todos los productos de la db
const getProducts = async () => {
  try {
    const products = await Product.findAll({
      include: {
        //Incluime el model Category
        model: Category,
        //TRAEME EL ATRIBUTO NAME
        attributes: ["name"],
        //MEDIANTE LOS ATRIBUTOS, VA SIEMPRE, BUENA PRACTICA
        through: {},
      },
    });

    const info = products.map((obj) => {
      return {
        nombre: obj.Nombre,
        descripcion: obj.Descripcion,
        precio: obj.Precio,
        stock: obj.Stock,
        img: obj.Imagen_URL,
        //
        categories: obj.category?.map((el) => el.category),
      };
    });
    return info;
  } catch (error) {
    console.error("Error al obtener los datos:", error);
  }
};

module.exports = getProducts;
