const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('ProducCart', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
            primaryKey: true,
        },
        id_products: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
            references: {
                model: 'Products', 
                key: 'id', 
                onDelete: 'NO ACTION', 
                onUpdate: 'CASCADE', 
            },
        },
        amount:{
            type: DataTypes.INTEGER
        },
        idCart:{
            type: DataTypes.STRING
        }
    }, { timestamps: true });
}