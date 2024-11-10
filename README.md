# Recipe Web App - Backend

This is the backend of the Recipe Web App built with Node.js and Express. It serves data to the frontend and handles user authentication and authorization.

- Hosted on - https://recipeappbe-production.up.railway.app

## Tech Stack

- Node.js
- Express
- MongoDB (database)
- JWT (for authentication)
- Axios 

## Features
- Recipe fetching from TheMealDB API
- JWT-based user authentication
- Protected routes for user access
- Favorite recipe management

## Getting Started

### Prerequisites

- Node.js and npm installed

### Installation

1. Clone the repository:
- git clone https://github.com/YahampathChandika/Recipe_App_BE.git
- cd recipe_app_be

   
2. Install dependencies:
- npm install


3. Environment Variables

 Create a .env file in the root of the backend directory with the following:
 
- JWT_SECRET - your jwt secret
- MONGODB_URI - your mongobd uri
- PORT - your backend port


4. Run the application locally
- npm start
