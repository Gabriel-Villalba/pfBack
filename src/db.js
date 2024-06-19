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

// const Products_Categories = require('./Models/Products_Categories.js')

//const Product_Categories = require('./Models/Products_Categories.js')

//const { v4: uuidv4 } = require('uuid');

// console.log('DB_USER:', process.env.DB_USER);
// console.log('DB_PASSWORD:', process.env.DB_PASSWORD);
// console.log('DB_HOST:', process.env.DB_H
// console.log('DB_NAME:', process.env.DB_NAME);

const { DB_USER, DB_PASSWORD, DB_HOST, DB_PORT, DB_NAME } = process.env;

const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`, {
  logging: false,
  native: false,
});


sequelize.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

const basename = path.basename(__filename);

const modelDefiners = [];

// Verificación de la existencia del directorio 'Models'
const modelsDirectory = path.join(__dirname, 'Models');
if (!fs.existsSync(modelsDirectory)) {
  console.error(`Error: Directory 'Models' does not exist.`);
  process.exit(1);
}

// Leemos todos los archivos de la carpeta Models, los requerimos y agregamos al arreglo modelDefiners
fs.readdirSync(modelsDirectory)
  .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
  .forEach((file) => {
    const filePath = path.join(modelsDirectory, file);
    if (fs.existsSync(filePath)) {
      modelDefiners.push(require(filePath));
    } else {
      console.error(`Error: File '${file}' does not exist in 'Models' directory.`);
      process.exit(1);
    }
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
const {User, Order,Category, Product} = sequelize.models;


Product.belongsToMany(Category, { through: 'Product_Category'},{ timestamps: false });
Category.belongsToMany(Product, { through: 'Product_Category'},{ timestamps: false });


// Order.belongsToMany(Product, { through: Detalle_pedido, foreignKey: 'Order_id', otherKey: 'Product_id' });
// Product.belongsToMany(Order, { through: Detalle_pedido, foreignKey: 'Product_id', otherKey: 'Order_id' });

// Product.hasOne(Inv, { foreignKey: 'Product_id' });
// Inv.belongsTo(Product, { foreignKey: 'Product_id' });

User.hasMany(Order, { foreignKey: 'User_id' });
Order.belongsTo(User, { foreignKey: 'User_id' });




// const categories = [
//   { Nombre: 'Casual' },
//   { Nombre: 'Elegante' },
//   { Nombre: 'Deportivo' },
//   { Nombre: 'Conjuntos' },
//   { Nombre: 'Formal' }
// ];

// const cargarCategorias = async () => {

//   try {
//     await Category.bulkCreate(categories);
//     console.log('Categorias cargadas');
//     } catch (error) {
//       console.log(error);
//       } 
//       };
// cargarCategorias()

//     await sequelize.sync();

//     await Category.bulkCreate(categories);
//     console.log('Categorías creadas exitosamente.');

//   } catch (error) {
//     console.error('Error al crear las categorías:', error);
//   }
// };



module.exports = {

...sequelize.models, 
conn: sequelize,   
};
