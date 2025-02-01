const { DataTypes } = require("sequelize");
const sequelize = require("../lib/db/sequelize");

const Product = sequelize.define(
  "Product",
  {
    product_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    product_name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    product_description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    product_image: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    product_price: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    product_likes: {
      type: DataTypes.NUMBER,
      allowNull: false,
    },
    product_reviews: {
      type: DataTypes.ARRAY,
      allowNull: false,
    },
  },
  {
    tableName: "Product",
    timestamps: false,
  }
);

module.exports = Product;
