const express = require('express');
const router = express.Router();
const User = require('../models/userModel');
const userController = require("../controllers/UserController");

// Create a new user
router.route('/').post(userController.create);

// Get all users
router.route('/').get(userController.getAll);

// Get user by id
router.route('/:id').get(userController.getOne);

// update user
router.route('/:id').put(userController.update);

// Delete user
router.route('/:id').delete(userController.remove);



module.exports = router