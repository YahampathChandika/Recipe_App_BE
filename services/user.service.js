const bcrypt = require("bcrypt");
const { getUsersCollection } = require("../config/db.config");

//Find user by email
async function findUserByEmail(email) {
  try {
    const usersCollection = getUsersCollection();
    return await usersCollection.findOne({ email });
  } catch (error) {
    console.error("Error in user service:", error);
    throw new Error("Failed to fetch user");
  }
}

//Create new user
async function createUser({ username, password, email }) {
  try {
    const usersCollection = getUsersCollection();
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = { username, email, password: hashedPassword };
    await usersCollection.insertOne(newUser);
  } catch (error) {
    console.error("Error in user service:", error);
    throw new Error("Failed to create user");
  }
}

//Verify password
async function verifyPassword(inputPassword, storedPassword) {
  try {
    return await bcrypt.compare(inputPassword, storedPassword);
  } catch (error) {
    console.error("Error in user service:", error);
    throw new Error("Failed to verify user password");
  }
}

module.exports = { findUserByEmail, createUser, verifyPassword };
