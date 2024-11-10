const { getFavoritesCollection } = require("../config/db.config");

//Find favorite recipe by userId and recipeId
async function findFavouriteRecipeById(userId, recipeId) {
  try {
    const favoritesCollection = getFavoritesCollection();
    return await favoritesCollection.findOne({ userId, recipeId });
  } catch (error) {
    console.error("Error in favorites service:", error);
    throw new Error("Failed to fetch favourites");
  }
}

//Add Favorite Recipe
async function addFavorite(
  userId,
  recipeId,
  recipeTitle,
  recipeCategory,
  recipeImgURL
) {
  try {
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
  } catch (error) {
    console.error("Error in favorites service:", error);
    throw new Error("Failed to add favourite recipe");
  }
}

//Get all favorite recipes of a user
async function getFavoritesByUserId(userId) {
  try {
    const favoritesCollection = getFavoritesCollection();
    return await favoritesCollection.find({ userId }).toArray();
  } catch (error) {
    console.error("Error in favorites service:", error);
    throw new Error("Failed to get favourite recipes");
  }
}

//Remove recipe from favorites list
async function removeFavorite(userId, recipeId) {
  try {
    const favoritesCollection = getFavoritesCollection();
    const result = await favoritesCollection.deleteOne({ userId, recipeId });

    if (result.deletedCount === 0) {
      throw new Error("Favorite recipe not found");
    }
  } catch (error) {
    console.error("Error in favorites service:", error);
    throw new Error("Failed to remove recipe from favorites");
  }
}

module.exports = {
  findFavouriteRecipeById,
  addFavorite,
  getFavoritesByUserId,
  removeFavorite,
};
