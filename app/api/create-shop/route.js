import { NextResponse } from "next/server";
import { getDatabaseInstance } from "@/lib/db";
import { createShopModel } from "@/models/Shop";
import { createAdminModel } from "@/models/Admin";
import { cacheAdminDatabaseUri, getAdminDatabaseUri } from "@/lib/cache";

export async function POST(req) {
  try {
    const { ownerId, shopName, shopTitle, shopDescription, shopCategory, address, city, country, contactEmail, contactPhone, logoUrl } = await req.json();

    if (!ownerId) {
      return NextResponse.json({ success: false, error: "Owner ID is required" }, { status: 400 });
    }

    // Get cached database URI
    let databaseUri = getAdminDatabaseUri(ownerId);

    if (!databaseUri) {
      console.log("🔍 Database URI not found in cache. Fetching from database...");

      // Fetch Admin details
      const admin = await Admin.findByPk(ownerId);
      if (!admin) {
        return NextResponse.json({ success: false, error: "Admin not found" }, { status: 404 });
      }

      // Get global database connection (where Admin details are stored)
      const globalSequelize = getDatabaseInstance(admin.databaseUri);
      const Admin = createAdminModel(globalSequelize);


      // Store URI in cache
      databaseUri = admin.databaseUri;
      cacheAdminDatabaseUri(ownerId, databaseUri);
    } else {
      console.log("✅ Database URI retrieved from cache.");
    }

    // Connect to the user's database
    const sequelize = getDatabaseInstance(databaseUri);
    await sequelize.authenticate();
    console.log("✅ Connected to user's database successfully!");

    // Initialize models
    const Shop = createShopModel(sequelize);
    await sequelize.sync({ alter: true });

    // Create a new shop
    const newShop = await Shop.create({
      ownerId,
      shopName,
      shopTitle,
      shopDescription,
      shopCategory,
      address,
      city,
      country,
      contactEmail,
      contactPhone,
      logoUrl,
    });

    console.log("✅ Shop created:", newShop.toJSON());

    return NextResponse.json({ success: true, message: "Shop created successfully!", shop: newShop });

  } catch (error) {
    console.error("❌ Error creating shop:", error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
