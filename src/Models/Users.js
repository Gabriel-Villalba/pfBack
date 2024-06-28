const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('User', {
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
        Email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        Contraseña: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        Direccion: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        Telefono: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        Fecha_de_registro: {
            type: DataTypes.DATE,
            allowNull: true,
            defaultValue: DataTypes.NOW
        },
        isAdmin: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
            defaultValue: false
        },
        isLogin:{
            type: DataTypes.BOOLEAN,
            allowNull: true,
            defaultValue: false

        }
    }, { timestamps: false });
}  