const recipeService = require("../services/recipe.service");

// Get recipes by category
const getRecipesByCategory = async (req, res) => {
  const { category } = req.params;
  try {
    const recipes = await recipeService.fetchRecipesByCategory(category);
    res.status(200).json(recipes);
  } catch (error) {
    console.error("Error fetching recipes:", error);
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getRecipesByCategory };
