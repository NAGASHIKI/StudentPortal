const express = require('express');
const router = express.Router();
const authController = require("../controllers/authController");
const {authMiddleware} = require("../middleware/auth")

router.route('/login').post(authController.login);
router.route('/logout').post(authMiddleware, authController.logOut);

module.exports = router;