const express = require('express');
const router = express.Router();
const Teacher = require('../models/teacherModel');
const teacherController = require("../controllers/teacherController");

// Create a new user
router.route('/').post(teacherController.create);

// Get all users
router.route('/').get(teacherController.getAll);

// Get user by id
router.route('/:id').get(teacherController.getOne);

// update user
router.route('/:id').put(teacherController.update);

// Delete user
router.route('/:id').delete(teacherController.remove);



module.exports = router