const express = require('express');
const { addExpense, getUserExpenses } = require('../controllers/expenseController');
const router = express.Router();

router.post('/', addExpense);
router.get('/:userId', getUserExpenses); // New route for user-specific expenses

module.exports = router;

// const express = require('express');
// const { addExpense, getExpenses } = require('../controllers/expenseController');
// const router = express.Router();

// router.post('/', addExpense);
// router.get('/', getExpenses);

// module.exports = router;
