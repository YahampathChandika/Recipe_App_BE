const { MongoClient, ServerApiVersion } = require("mongodb");
const dotenv = require("dotenv");
dotenv.config();

const uri = process.env.MONGODB_URI;

let dbClient;
let usersCollection;
let favoritesCollection;

async function connectToDatabase() {
  try {
    dbClient = new MongoClient(uri, {
      serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
      },
    });

    await dbClient.connect();
    const mealdb = dbClient.db("MealInventory");
    usersCollection = mealdb.collection("users");
    favoritesCollection = mealdb.collection("favorites");

    console.log("Successfully connected to MongoDB!");
  } catch (error) {
    console.error("Failed to connect to MongoDB", error);
  }
}

function getUsersCollection() {
  return usersCollection;
}

function getFavoritesCollection() {
  return favoritesCollection;
}

module.exports = {
  connectToDatabase,
  getUsersCollection,
  getFavoritesCollection,
};
