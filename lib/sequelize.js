import "dotenv/config";
import { Sequelize } from "sequelize";
import pg from "pg";

const sequelize = new Sequelize(process.env.DATABASE_URI, {
  dialect: "postgres",
  dialectModule: pg,
  logging: false,
});

export default sequelize; // ✅ Only export sequelize, don't syncDB here
