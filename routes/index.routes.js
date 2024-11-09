const express = require('express');
const userRoutes = require('./user.routes');
const recipeRoutes = require('./recipe.routes'); 
const favoritesRoutes = require('./favorites.routes');  

const router = express.Router();

router.use('/users', userRoutes);
router.use('/recipes', recipeRoutes);  
router.use('/favourites', favoritesRoutes);  

module.exports = router;

