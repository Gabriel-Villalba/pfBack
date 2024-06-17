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
            allowNull: false,
        },
        Direccion: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        Telefono: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        Fecha_de_registro: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW
        },
        isAdmin: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        },
<<<<<<< HEAD
        isActiv: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: true
=======
        isLogin:{
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
>>>>>>> 5c2dd52033de96aa9642e7bebe0904837098ff60
        }
    }, { timestamps: false });
}  