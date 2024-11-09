const express = require("express");
const recipeController = require("../controllers/recipe.controller");

function recipeRoutes() {
    const router = express.Router();

    router.use(express.json());

    router.get('/category/:category', recipeController.getRecipesByCategory);

    return router;
}

module.exports = recipeRoutes();
