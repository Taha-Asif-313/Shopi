import { Sequelize } from "sequelize";
import pg from "pg";

const connectionCache = new Map(); // Cache database instances

export function getDatabaseInstance(databaseUri) {
  if (!databaseUri) throw new Error("Database URI is required");

  // If connection already exists, return it
  if (connectionCache.has(databaseUri)) {
    return connectionCache.get(databaseUri);
  }

  // Otherwise, create a new connection
  const sequelize = new Sequelize(databaseUri, {
    dialect: "postgres",
    dialectModule: pg,
    logging: false,
  });

  // Store in cache
  connectionCache.set(databaseUri, sequelize);
  console.log(`✅ New database connection initialized for ${databaseUri}`);

  return sequelize;
}
