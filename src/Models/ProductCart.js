const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('ProducCart', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
            primaryKey: true,
        },
        id_products :{
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            unique: false,
            allowNull: false,
            primaryKey: true,
        },
        amount:{
            type: DataTypes.INTEGER
        },
        idCart:{
            type: DataTypes.STRING
        }
    }, { timestamps: true });
}