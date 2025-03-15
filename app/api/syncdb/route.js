import { NextResponse } from "next/server";
import sequelize from "@/lib/sequelize"; // Ensure correct import path
import Admin from "@/models/Admin"; // Import models

export async function GET() {
  try {
    await sequelize.authenticate(); // Check DB connection
    console.log("✅ Connection to the database established.");

    await sequelize.sync({ alter: true }); // Sync models with DB
    console.log("✅ Database & tables synced!");

    return NextResponse.json({ success: true, message: "Database initialized successfully!" });
  } catch (error) {
    console.error("❌ Database initialization failed:", error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
