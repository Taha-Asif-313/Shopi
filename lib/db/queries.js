const pool = require('./pool');

// Get all users
async function getAllUsers() {
  const { rows } = await pool.query('SELECT * FROM users');
  return rows;
}

// Add a user
async function addUser(fullname, username, email, hashedPassword) {
  const query = `
    INSERT INTO users (fullname, username, email, password) 
    VALUES ($1, $2, $3, $4) 
    RETURNING *;
  `;
  const values = [fullname, username, email, hashedPassword];

  try {
    const { rows } = await pool.query(query, values);
    return rows[0];
  } catch (error) {
    console.error("Error executing query:", error);
    throw error; // Rethrow to handle the error elsewhere if necessary
  }
}

// Find a user by username or email
async function findUser(usernameOrEmail) {
  const query = `
    SELECT * FROM users
    WHERE username = $1 OR email = $1;
  `;

  const values = [usernameOrEmail];

  try {
    const { rows } = await pool.query(query, values);

    // If no user is found, return null or handle accordingly
    if (rows.length === 0) {
      return null;
    }

    // Return the first user found
    return rows[0];
  } catch (error) {
    console.error("Error executing query:", error);
    throw error; // Rethrow to handle the error elsewhere if necessary
  }
}





module.exports = {
  getAllUsers,
  addUser,
  findUser
};
