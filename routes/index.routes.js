const express = require('express');
const userRoutes = require('./user.routes');
const recipeRoutes = require('./recipe.routes'); 

const router = express.Router();

router.use('/users', userRoutes);
router.use('/recipes', recipeRoutes);  

module.exports = router;

