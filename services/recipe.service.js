const axios = require("axios");

// Fetch recipes by category
async function getRecipesByCategory(category) {
  try {
    const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`);
    return response.data;
  } catch (error) {
    console.error('Error in recipe service:', error);
    throw new Error('Failed to fetch recipes from external API');
  }
}

//Get recipe by id
async function getRecipesById(id) {
  try {
    const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
    return response.data;
  } catch (error) {
    console.error('Error in recipe service:', error);
    throw new Error('Failed to fetch recipe data from external API');
  }
}

module.exports = { getRecipesByCategory, getRecipesById };
