import { DataTypes } from "sequelize";
import bcrypt from "bcrypt";

export function createAdminModel(sequelize) {
  const Admin = sequelize.define(
    "Admin",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      fullName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true,
        },
      },
      phone: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      age: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          min: 18, // Ensures age is at least 18
        },
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      databaseUri: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      tableName: "Admins",
      timestamps: true,
      hooks: {
        beforeCreate: async (admin) => {
          const salt = await bcrypt.genSalt(10);
          admin.password = await bcrypt.hash(admin.password, salt);
        },
      },
    }
  );

  return Admin;
}
