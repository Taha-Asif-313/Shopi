import { addUser, findUser } from "../../../../lib/db/queries";
import bcrypt from "bcrypt";

export async function POST(req) {
  try {
    // Get data from frontend
    const { fullname, username, email, password, confirmPassword } =
      await req.json();

    // Validation for required fields
    if (!fullname || !username || !email || !password || !confirmPassword) {
      return new Response(
        JSON.stringify({
          success: false,
          message: "All fields are required",
        }),
        { status: 400 }
      );
    }

    // Find user to check if user exist or not
    const user = await findUser(email);
    if (user) {
      return new Response(
        JSON.stringify({
          success: false,
          message: "Try different email!",
        }),
        { status: 400 }
      );
    }

    // Password confirmation validation
    if (password !== confirmPassword) {
      return new Response(
        JSON.stringify({
          success: false,
          message: "Passwords do not match",
        }),
        { status: 400 }
      );
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Add the new user
    const newUser = await addUser(fullname, username, email, hashedPassword);
    return new Response(
      JSON.stringify({
        success: true,
        message: "User added successfully",
        user: newUser,
      }),
      { status: 201 }
    );
  } catch (error) {
    // If error occur
    console.error("Error adding user:", error);
    return new Response(
      JSON.stringify({
        success: false,
        message: "Failed to add user",
      }),
      { status: 500 }
    );
  }
}
