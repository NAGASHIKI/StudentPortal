const express = require('express');
const router = express.Router();
const Student = require('../models/studentModel');
const studentController = require("../controllers/studentController");

// Create a new student
router.route('/').post(studentController.create);

// Get all students
router.route('/').get(studentController.getAll);

// Get student by id
router.route('/:id').get(studentController.getOne);

// update student
router.route('/:id').put(studentController.update);

// Delete student
router.route('/:id').delete(studentController.remove);



module.exports = router