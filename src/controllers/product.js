const {Product} = require ("../Models/Products")
const {Category} = require ("../Models/Categories")

//detail
const getProduct = async (req, res) => {
    const { id } = req.params;
    id? await Product.findById(id)
        .then((product) => {res.json(product)})
        .catch((err) => {res.json(err)}): 
         res.json({message: "No product found"})
  };

// create
const createProduct = async (req, res) => {
    const { Nombre, Precio,  Descripcion, Categorie_id, Imagen_URL } = req.body;
    
        const product = await validarProcuct(Nombre);//validar si el producto ya existe y 
                                                    //si vienen todos los datos
        product.id? res.json({message: "El producto ya existe"}):
        await Product.create({ Nombre, Precio,  Descripcion, Categorie_id, Imagen_URL })
       
        const categories = await Category.findAll({ where: { name: category } });
        newProduct.addCategory(categories);
       
        res.send('Createado exitosamente!!!');
      } 

//Delete
const deleteProduct = async (req, res) => {
        try {
            req.params? await Product.findByIdAndDelete(req.params.id) 
            .then((product) => {res.json(product)})
            .catch((err) => {res.json(err)}):   
            res.json({message: "No product found"})
            } catch (error) {
                res.json({message: "No product found"})
                return res.status(404).json({ message: "Producto no encontrado" });
            }

        //   const { id } = req.params;
        //   Product.destroy({ where: { id } });
        //   res.send('Done');
        // } catch (error) {
        //   return res.status(404).send("Error") 
        // }
}; 
//update

const updateProduct = async (req, res) => {
    const { id, Nombre, Precio, Descripcion, Categorie_id, Imagen_URL } = req.body;

    try {
        // Primero, verifica si el producto existe
        const existingProduct = await Product.findByPk(id);
        if (!existingProduct) {
            return res.status(404).json({ message: "Producto no encontrado" });
        }
        // Actualiza los campos del producto
        existingProduct.Nombre = Nombre;
        existingProduct.Precio = Precio;
        existingProduct.Descripcion = Descripcion;
        existingProduct.Categorie_id = Categorie_id;
        existingProduct.Imagen_URL = Imagen_URL;
   // Guarda los cambios en la base de datos
        await existingProduct.save();

        res.json({ message: "Producto actualizado exitosamente" });
    } catch (error) {
        console.error("Error al actualizar el producto:", error);
        res.status(500).json({ message: "Error interno del servidor" });
    }
};


  module.exports = {getProduct , createProduct , deleteProduct, updateProduct}