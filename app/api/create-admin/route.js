import { NextResponse } from "next/server";
import { Sequelize } from "sequelize";
import pg from "pg";
import { createAdminModel } from "@/models/Admin";
import bcrypt from "bcrypt";

export async function POST(req) {
  try {
    const { databaseUri, fullName, email, phone, age, password } = await req.json();

    if (!databaseUri || !password) {
      return NextResponse.json({ success: false, error: "Database URI and password are required" }, { status: 400 });
    }

    // Create a new Sequelize instance for the user's DB
    const sequelize = new Sequelize(databaseUri, {
      dialect: "postgres",
      dialectModule: pg,
      logging: false,
    });

    await sequelize.authenticate();
    console.log("✅ Connected to user database successfully!");

    // Initialize Admin model
    const Admin = createAdminModel(sequelize);

    // Sync database
    await sequelize.sync({ alter: true });
    console.log("✅ Database & tables synced!");

    // Hash the password before storing
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Insert Admin Record
    const newAdmin = await Admin.create({
      fullName: fullName || "Default Admin",
      email: email || "admin@example.com",
      phone: phone || "1234567890",
      age: age || 30,
      password: hashedPassword,
      databaseUri,
    });

    console.log("✅ Admin record created:", newAdmin.toJSON());

    return NextResponse.json({
      success: true,
      message: "Database initialized, tables created, and Admin stored!",
      admin: {
        id: newAdmin.id,
        fullName: newAdmin.fullName,
        email: newAdmin.email,
        phone: newAdmin.phone,
        age: newAdmin.age,
        createdAt: newAdmin.createdAt,
      },
    });
  } catch (error) {
    console.error("❌ Error initializing database:", error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
