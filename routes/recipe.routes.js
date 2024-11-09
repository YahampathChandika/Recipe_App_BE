const express = require("express");
const recipeController = require("../controllers/recipe.controller");
const verifyToken = require('../middleware/auth.middleware');

function recipeRoutes() {
    const router = express.Router();

    router.use(express.json());

    router.get('/category/:category', verifyToken, recipeController.getRecipesByCategory);

    return router;
}

module.exports = recipeRoutes();
