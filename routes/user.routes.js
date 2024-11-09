const express = require("express");
const { registerUser, loginUser } = require("../controllers/user.controller");
const { body } = require("express-validator");

const router = express.Router();

// Register Route
router.post(
  "/register",
  [
    body("firstName").isString().notEmpty().withMessage("First Name is required"),
    body("lastName").isString().notEmpty().withMessage("Last Name is required"),
    body("phoneNumber").notEmpty().withMessage("Phone Number is required"),
    body("password")
      .isLength({ min: 6 })
      .withMessage("Password must be at least 6 characters long"),
    body("email").isEmail().withMessage("Invalid email format"),
  ],
  registerUser
);

// Login Route
router.post(
  "/login",
  [
    body("email").isEmail().withMessage("Email is required"),
    body("password").notEmpty().withMessage("Password is required"),
  ],
  loginUser
);

module.exports = router;
