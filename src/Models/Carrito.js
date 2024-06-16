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
            type: DataTypes.ARRAY(DataTypes.STRING)
        },
        cantProducts :{
            type: DataTypes.ARRAY(DataTypes.INTEGER)
        }
    }, { timestamps: false });
}