import { DataTypes } from "sequelize";

export function createShopModel(sequelize) {
  return sequelize.define(
    "Shop",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      shopName: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      shopTitle: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      shopDescription: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      shopCategory: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      ownerId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: "Admins",
          key: "id",
        },
      },
      address: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      city: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      country: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      contactEmail: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isEmail: true,
        },
      },
      contactPhone: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      logoUrl: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      isActive: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },
    },
    {
      tableName: "Shops",
      timestamps: true, // Adds createdAt & updatedAt
    }
  );
}
