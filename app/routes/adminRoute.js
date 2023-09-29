const express = require('express');
const router = express.Router();
const Admin = require('../models/adminModel');
const adminController = require("../controllers/adminController");

// Create a new user
router.route('/').post(adminController.create);

// Get all users
router.route('/').get(adminController.getAll);

// Get user by id
router.route('/:id').get(adminController.getOne);

// update user
router.route('/:id').put(adminController.update);

// Delete user
router.route('/:id').delete(adminController.remove);



module.exports = router