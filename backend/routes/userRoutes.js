const express = require('express');
const { createUser, getUserByEmail } = require('../controllers/userController');
const router = express.Router();

router.post('/', createUser);
router.get('/:email', getUserByEmail);

module.exports = router;
