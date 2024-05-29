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
const Products_Categories = require('./Models/Products_Categories.js')

//const { v4: uuidv4 } = require('uuid');



const { DB_USER, DB_PASSWORD, DB_HOST, DB_PORT } = process.env;

const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/tienda_de_ropa`, {
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
Products_Categories(sequelize);

const { User, Category, Product, Order, Inv, Detalle_pedido, Product_Category } = sequelize.models;

Product.belongsToMany(Category, { through: Product_Category, foreignKey: 'Product_id', otherKey: 'Category_id' });
Category.belongsToMany(Product, { through: Product_Category, foreignKey: 'Category_id', otherKey: 'Product_id' });

Order.belongsToMany(Product, { through: Detalle_pedido, foreignKey: 'Order_id', otherKey: 'Product_id' });
Product.belongsToMany(Order, { through: Detalle_pedido, foreignKey: 'Product_id', otherKey: 'Order_id' });

Product.hasOne(Inv, { foreignKey: 'Product_id' });
Inv.belongsTo(Product, { foreignKey: 'Product_id' });

User.hasMany(Order, { foreignKey: 'User_id' });
Order.belongsTo(User, { foreignKey: 'User_id' });



module.exports = {

...sequelize.models, 
conn: sequelize,   
};



