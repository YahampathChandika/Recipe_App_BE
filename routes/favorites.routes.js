const express = require('express');
const { addFavoriteRecipe, getFavoriteRecipes, removeFavoriteRecipe } = require('../controllers/favorites.controller');
const verifyToken = require('../middleware/auth.middleware');

const router = express.Router();

router.post('/', verifyToken, addFavoriteRecipe);
router.get('/', verifyToken, getFavoriteRecipes);
router.delete('/:recipeId', verifyToken, removeFavoriteRecipe);

module.exports = router;
