const bcrypt = require("bcrypt");
const { getUsersCollection } = require("../config/db.config");

//Find user by email
async function findUserByEmail(email) {
  const usersCollection = getUsersCollection();
  return await usersCollection.findOne({ email });
}

//Create new user
async function createUser({
  firstName,
  lastName,
  email,
  phoneNumber,
  password,
}) {
  console.log({ firstName, lastName, email, phoneNumber, password });
  const usersCollection = getUsersCollection();
  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = {
    firstName,
    lastName,
    email,
    phoneNumber,
    password: hashedPassword,
  };
  await usersCollection.insertOne(newUser);
}

//Verify password
async function verifyPassword(inputPassword, storedPassword) {
  return await bcrypt.compare(inputPassword, storedPassword);
}

module.exports = { findUserByEmail, createUser, verifyPassword };
