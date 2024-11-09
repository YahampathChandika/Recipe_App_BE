const { getFavoritesCollection } = require("../config/db.config");

//Find favourite recipe by userId and recipeId
async function findFavouriteRecipeById(userId, recipeId) {
  const favoritesCollection = getFavoritesCollection();
  return await favoritesCollection.findOne({ userId, recipeId });
}

//Add Favorite Recipe
async function addFavorite(
  userId,
  recipeId,
  recipeTitle,
  recipeCategory,
  recipeImgURL
) {
  const favoritesCollection = getFavoritesCollection();

  const favorite = {
    userId,
    recipeId,
    recipeTitle,
    recipeCategory,
    recipeImgURL,
    addedAt: new Date(),
  };

  await favoritesCollection.insertOne(favorite);
}

//Get all favorite recipes of a user
async function getFavoritesByUserId(userId) {
  const favoritesCollection = getFavoritesCollection();
  return await favoritesCollection.find({ userId }).toArray();
}

async function removeFavorite(userId, recipeId) {
  const favoritesCollection = getFavoritesCollection();
  const result = await favoritesCollection.deleteOne({ userId, recipeId });

  if (result.deletedCount === 0) {
    throw new Error("Favorite recipe not found");
  }
}

module.exports = {
  findFavouriteRecipeById,
  addFavorite,
  getFavoritesByUserId,
  removeFavorite,
};
