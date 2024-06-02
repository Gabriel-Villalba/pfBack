require('dotenv').config();
const { Sequelize } = require('sequelize');
const fs = require('fs');
const path = require('path');
const axios = require('axios');
const Users = require('./Models/Users.js')
const Categories = require('./Models/Categories.js')
const Products = require('./Models/Products.js')
const Orders = require('./Models/Orders.js')
const Inventary = require('./Models/Inventary.js')
const Detalles_pedidos = require('./Models/Detalles_pedidos.js')
//const Product_Categories = require('./Models/Products_Categories.js')
//const { v4: uuidv4 } = require('uuid');



const { DB_USER, DB_PASSWORD, DB_HOST, DB_PORT } = process.env;

const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/tienda_de_ropa`, {
  logging: false, // set to console.log to see the raw SQL queries
  native: false, // lets Sequelize know we can use pg-native for ~30% more speed
});

const basename = path.basename(__filename);

const modelDefiners = [];

// Leemos todos los archivos de la carpeta Models, los requerimos y agregamos al arreglo modelDefiners
fs.readdirSync(path.join(__dirname, '/models'))
  .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, '/models', file)));
  });

// Injectamos la conexion (sequelize) a todos los modelos
modelDefiners.forEach(model => model(sequelize));
// Capitalizamos los nombres de los modelos ie: product => Product
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [entry[0][0].toUpperCase() + entry[0].slice(1), entry[1]]);
sequelize.models = Object.fromEntries(capsEntries);

Users(sequelize);
Categories(sequelize);
Products(sequelize);
Orders(sequelize);
Inventary(sequelize);
Detalles_pedidos(sequelize);


//const { User, Category, Product, Order, Inv, Detalle_pedido,} = sequelize.models;
const {Category, Product} = sequelize.models;

//Product.belosToMany(Category, { through: Product_Category, foreignKey: 'Product_id', otherKey: 'Category_id' });
//Category.belongsToMany(Product, { through: Product_Category, foreignKey: 'Category_id', otherKey: 'Product_id' });
Product.belongsToMany(Category, { through: 'Product_Category'},{ timestamps: false });
Category.belongsToMany(Product, { through: 'Product_Category'},{ timestamps: false });


// Order.belongsToMany(Product, { through: Detalle_pedido, foreignKey: 'Order_id', otherKey: 'Product_id' });
// Product.belongsToMany(Order, { through: Detalle_pedido, foreignKey: 'Product_id', otherKey: 'Order_id' });

// Product.hasOne(Inv, { foreignKey: 'Product_id' });
// Inv.belongsTo(Product, { foreignKey: 'Product_id' });

// User.hasMany(Order, { foreignKey: 'User_id' });
// Order.belongsTo(User, { foreignKey: 'User_id' });



const categories = [
 
  { name: 'Casual' },
  { name: 'Elegante' },
  
  { name: 'Deportivo' },
 
  { name: 'Conjuntos' },
  
  { name: 'Formal' }
];

/*const cargarCategorias = async () => {

  try {
    await Category.bulkCreate(categories);
    console.log('Categorias cargadas');
    } catch (error) {
      console.log(error);
      }
      };
cargarCategorias()*/
//     await sequelize.sync();

//     await Category.bulkCreate(categories);
//     console.log('Categorías creadas exitosamente.');

//   } catch (error) {
//     console.error('Error al crear las categorías:', error);
//   }
// };
//
const products = [
  {
    Nombre: 'Vestido Rojo',
    Descripcion: 'Vestido rojo elegante para ocasiones especiales.',
    Precio: 49.99,
    Stock: 50,
    CategoriaNombre: 'Elegante', 
    Imagen_URL: 'https://example.com/images/vestido-rojo.jpg',
    onOffer: true,
    Brand: 'Elegancia'
  },
  {
    Nombre: 'Blusa Blanca',
    Descripcion: 'Blusa blanca de algodón, perfecta para el día a día.',
    Precio: 29.99,
    Stock: 80,
    CategoriaNombre: 'Casual', 
    Imagen_URL: 'https://example.com/images/blusa-blanca.jpg',
    onOffer: false,
    Brand: 'Casual'
  },
  {
    Nombre: 'Jeans Azul',
    Descripcion: 'Jeans azul de corte recto, ideal para cualquier ocasión.',
    Precio: 39.99,
    Stock: 100,
    CategoriaNombre: 'Casual', 
    Imagen_URL: 'https://co.pinterest.com/pin/799248265147618492/',
    onOffer: true,
    Brand: 'Denim'
  },
  {
    Nombre: 'Falda Negra',
    Descripcion: 'Falda negra corta, perfecta para una noche de fiesta.',
    Precio: 34.99,
    Stock: 60,
    CategoriaNombre: 'Elegante',
    Imagen_URL: 'https://co.pinterest.com/pin/1049549888133127558/',
    onOffer: false,
    Brand: 'Nocturna'
  },
  {
    Nombre: 'Shorts de Mezclilla',
    Descripcion: 'Shorts de mezclilla, perfectos para el verano.',
    Precio: 24.99,
    Stock: 120,
    CategoriaNombre: 'Casual', 
    Imagen_URL: 'https://co.pinterest.com/pin/924645367239638760/',
    onOffer: true,
    Brand: 'Verano'
  },
  {
    Nombre: 'Conjunto Deportivo',
    Descripcion: 'Conjunto deportivo cómodo y moderno.',
    Precio: 59.99,
    Stock: 70,
    CategoriaNombre: 'Deportivo', 
    Imagen_URL: 'https://co.pinterest.com/pin/303430093666302483/',
    onOffer: false,
    Brand: 'Fitness'
  },
  {
    Nombre: 'Vestido Floral',
    Descripcion: 'Vestido floral ideal para primavera.',
    Precio: 44.99,
    Stock: 40,
    CategoriaNombre: 'Formal', 
    Imagen_URL: 'https://co.pinterest.com/pin/AZk-S8I8Eg7KG2qxx3cbk7HO8uKg59u6GuzcDdRLu-k_EDjlUATjEn7YjDOtHXRcOuiFCCq3d2mI1qbdEKyp7Ws/',
    onOffer: true,
    Brand: 'Primavera'
  },
  {
    Nombre: 'Blusa de Seda',
    Descripcion: 'Blusa de seda suave y elegante.',
    Precio: 49.99,
    Stock: 60,
    CategoriaNombre: 'Elegante', 
    Imagen_URL: 'https://co.pinterest.com/pin/3307399719082784/',
    onOffer: false,
    Brand: 'Elegancia'
  },
  {
    Nombre: 'Jeans Negros',
    Descripcion: 'Jeans negros ajustados para un look moderno.',
    Precio: 39.99,
    Stock: 90,
    CategoriaNombre: 'Casual', 
    Imagen_URL: 'https://co.pinterest.com/pin/16958936094772826/',
    onOffer: true,
    Brand: 'Urban'
  },
  {
    Nombre: 'Falda de Cuero',
    Descripcion: 'Falda de cuero para un look atrevido.',
    Precio: 54.99,
    Stock: 50,
    CategoriaNombre: 'Elegante',
    Imagen_URL: 'https://co.pinterest.com/pin/1080652873074373890/',
    onOffer: false,
    Brand: 'Atrevida'
  },
  {
    Nombre: 'Shorts Blancos',
    Descripcion: 'Shorts blancos frescos para el verano.',
    Precio: 22.99,
    Stock: 100,
    CategoriaNombre: 'Casual', 
    Imagen_URL: 'https://co.pinterest.com/pin/1080371398096686234/',
    onOffer: true,
    Brand: 'Verano'
  },
  {
    Nombre: 'Conjunto Casual',
    Descripcion: 'Conjunto casual para un día relajado.',
    Precio: 39.99,
    Stock: 80,
    CategoriaNombre: 'Casual', 
    Imagen_URL: 'https://co.pinterest.com/pin/1046031450931347613/',
    onOffer: false,
    Brand: 'Casual'
  },
  {
    Nombre: 'Vestido de Noche',
    Descripcion: 'Vestido de noche largo y elegante.',
    Precio: 89.99,
    Stock: 30,
    CategoriaNombre: 'Elegante', 
    Imagen_URL: 'https://co.pinterest.com/pin/756182593702954954/',
    onOffer: true,
    Brand: 'Glamour'
  },
  {
    Nombre: 'Blusa Estampada',
    Descripcion: 'Blusa estampada colorida y alegre.',
    Precio: 29.99,
    Stock: 70,
    CategoriaNombre: 'Casual',
    Imagen_URL: 'https://co.pinterest.com/pin/756182593708232917/',
    onOffer: false,
    Brand: 'Alegre'
  },
  {
    Nombre: 'Jeans Rasgados',
    Descripcion: 'Jeans rasgados para un estilo desenfadado.',
    Precio: 44.99,
    Stock: 60,
    CategoriaNombre: 'Casual',
    Imagen_URL: 'https://co.pinterest.com/pin/397935317086388567/',
    onOffer: true,
    Brand: 'Desenfadado'
  }
];

/*const cargarProductos = async () => {
  try {
    //await cargarCategorias(); 
    const categorias = await Category.findAll();
    //console.log('categorias',categorias)
    const mapearCategorias = categorias.reduce((map, tategory) => {
      map[tategory.category] = tategory.id;
      return map;
    }, {});
    const descripcion = new Set();
    const validarCategoriasYproductos = products.map(product => {
      const categoriaId = mapearCategorias[product.CategoriaNombre];
    //console.log('categoriaId',categoriaId)
      if (!categoriaId) {
        throw new Error(`Categoría no encontrada para el producto: ${product.Nombre}`);
      }

      if (descripcion.has(product.Descripcion)) {
        throw new Error(`Descripción duplicada para el producto: ${product.Nombre}`);
      }
      descripcion.add(product.Descripcion);

      //console.log('descripcion',descripcion)

      // return {
      //   id: uuidv4(),
      //   ...product,
      //   Categorie_id: categoriaId
      // };
    });

    //console.log('validarCategoriasYproductos',validarCategoriasYproductos)

    await Product.bulkCreate(validarCategoriasYproductos);
    console.log('Productos creados exitosamente.');

  } catch (error) {
    console.error('Error al crear los productos:', error);

  } finally {
    await sequelize.close();
  }
};*/

 //cargarProductos();

module.exports = {

...sequelize.models, 
conn: sequelize,   
};
