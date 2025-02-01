import { findUser } from "@/lib/db/queries";
import bcrypt from "bcrypt";

export async function POST(req) {
  try {
    // Get Data from frontend
    const { email, password } = await req.json();

    // Find user if exist or not
    const user = await findUser(email);

    if (user) {
      // Check if password matches or not
      const isPasswordMatch = await bcrypt.compare(password, user.password);
      if (isPasswordMatch) {
        return new Response(
          JSON.stringify({
            success: true,
            message: "login success",
            user: user
          }),
          { status: 201 }
        );
      } else {
        return new Response(
          JSON.stringify({ success: false, message: "login failed" }),
          { status: 400 }
        );
      }
    } else {
      return new Response(
        JSON.stringify({ success: false, message: "login failed" }),
        { status: 400 }
      );
    }
  } catch (error) {
    // If error occurs
    console.error("Error adding user:", error);
    return new Response(
      JSON.stringify({
        success: false,
        message: "Internal Server Error",
        error:error
      }),
      { status: 500 }
    );
  }
}
