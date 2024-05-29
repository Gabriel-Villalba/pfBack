// require('dotenv').config();
// const { Sequelize } = require('sequelize');
// const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;
// const {UserModel} = require('./models/UserModel')
// const {FavoriteModel} = require('./models/FavoriteModel')



// const sequelize = new Sequelize(
//    `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/miTienda`,
//    { logging: false, native: false }
// );


// UserModel(sequelize) 
// FavoriteModel(sequelize)

// const User = sequelize.models.user
// const Favorite = sequelize.models.favorite

// User.belongsToMany(Favorite, {through: 'users_favorites'})
// Favorite.belongsToMany(User, {through: 'users_favorites'})

// module.exports = {
//    User,
//    Favorite,
//    conn: sequelize,
// };
