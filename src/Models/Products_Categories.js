const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('Product_Category', {
        Product_id: {
            type: DataTypes.UUID,
            allowNull: false,
            references: {
                model: 'Products',
                key: 'id',
            },
            primaryKey: true,
        },
        Category_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'Categories',
                key: 'id',
            },
            primaryKey: true,
        },
        
    }, { timestamps: false, 
        // indexes: [
        //     {
        //         unique: true,
        //         fields: ['Product_id', 'Category_id']
        //     }
        // ]
    });
}