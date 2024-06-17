const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('Product', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            unique: true,
            allowNull: false,
            primaryKey: true,
        },
        Nombre: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        Descripcion: {
            type: DataTypes.STRING,
            allowNull: false,
<<<<<<< HEAD
            unique: true
=======
        
>>>>>>> 5c2dd52033de96aa9642e7bebe0904837098ff60
        },
        Precio: {
            type: DataTypes.DECIMAL,
            allowNull: false,
        },
        Stock: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },

        Imagen_URL: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        onOffer: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false 
        },
        Brand: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    }, { timestamps: false });
}