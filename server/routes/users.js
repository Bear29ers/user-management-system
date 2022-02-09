const express = require('express');
const userController = require('../controllers/userController');

const router = express.Router();

// Create, Find, Update, Delete
router.get('/', userController.view);
router.post('/', userController.find);
router.get('/adduser', userController.form);
router.post('/adduser', userController.create);

module.exports = router;
