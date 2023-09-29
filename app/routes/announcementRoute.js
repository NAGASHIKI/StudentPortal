const express = require('express');
const router = express.Router();
const Announcement = require('../models/announcementModel');
const announcementController = require("../controllers/announcementController");

// Create a new Announcement
router.route('/').post(announcementController.create);

// Get all Announcements
router.route('/').get(announcementController.getAll);




module.exports = router