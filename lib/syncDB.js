import sequelize from "./sequelize.js"; // ✅ Import initialized Sequelize instance
import "../models/Admin.js"; // ✅ Import models after sequelize is set

export const syncDB = async () => {
  try {
    await sequelize.authenticate(); // Check DB connection
    console.log(
      "✅ Connection to the database has been established successfully."
    );

    await sequelize.sync({ alter: true }); // Sync all models
    console.log("✅ Database & tables synced!");

    process.exit(0);
  } catch (error) {
    console.error("❌ Unable to connect to the database:", error);
    process.exit(1);
  }
};

syncDB();
