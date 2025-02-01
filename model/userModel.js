const { DataTypes } = require("sequelize");
const sequelize = require("../lib/db/sequelize");

const User = sequelize.define(
  "User",
  {
    user_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    full_name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phone_no: {
        type: DataTypes.NUMBER,
        allowNull: false,
      },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    cart_products: {
      type: DataTypes.ARRAY,
      allowNull: false,
    },
  },
  {
    tableName: "User",
    timestamps: false,
  }
);

module.exports = User;
