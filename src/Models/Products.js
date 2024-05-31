const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('Product', {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            allowNull: false,
            defaultValue: DataTypes.UUIDV4
        },
        Nombre: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        Descripcion: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        Contraseña: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        Precio: {
            type: DataTypes.DECIMAL,
            allowNull: false,
        },
        Stock: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        Categorie_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'Categories',
                key: 'id',
            },
        },
        Imagen_URL: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    }, { timestamps: false });
}
