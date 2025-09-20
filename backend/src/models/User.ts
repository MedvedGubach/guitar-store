import { DataTypes } from "sequelize";
import sequelize from "../config/database.ts";

export const User = sequelize.define('User', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        unique: true,
    },
    cart: {
        type: DataTypes.STRING,
        unique: true,
    },
    favorites: {
        type: DataTypes.STRING,
        unique: true,
    },
});
