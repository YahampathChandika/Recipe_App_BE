const axios = require("axios");

// Fetch recipes by category
const fetchRecipesByCategory = async (category) => {
  try {
    const response = await axios.get(
      `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`
    );
    if (!response.data.meals) {
      throw new Error("No meals found for this category");
    }
    return response.data.meals;
  } catch (error) {
    console.error("Error fetching recipes from TheMealDB API:", error);
    throw new Error("Unable to fetch recipes");
  }
};

module.exports = { fetchRecipesByCategory };
