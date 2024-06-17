const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('Cart', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            unique: true,
            allowNull: false,
            primaryKey: true,
        },
        id_products :{
            type: DataTypes.STRING
        },
        cantProducts :{
            type: DataTypes.INTEGER
        }
    }, { timestamps: false });
}