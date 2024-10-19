const Expense = require('../models/expenseModel');

const addExpense = async (req, res) => {
  const { amount, splitType, participants } = req.body;
  const userId = req.body.userId; // Assume userId is passed in the request body

  try {
    const expense = await Expense.create({ amount, splitType, participants, user: userId });
    res.status(201).json(expense);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Fetch expenses for a specific user
const getUserExpenses = async (req, res) => {
  const userId = req.params.userId; // Get userId from request parameters

  try {
    const expenses = await Expense.find({ user: userId });
    res.json(expenses);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { addExpense, getUserExpenses };

// const Expense = require('../models/expenseModel');

// const addExpense = async (req, res) => {
//   const { amount, splitType, participants } = req.body;

//   try {
//     let splitAmounts = [];

//     if (splitType === 'equal') {
//       // Calculate the amount for each participant
//       const numberOfParticipants = participants.length;
//       const amountPerPerson = (amount / numberOfParticipants).toFixed(2); // Keep two decimal places

//       // Map participants to their amounts
//       splitAmounts = participants.map(participant => ({
//         user: participant,
//         amount: parseFloat(amountPerPerson), // Ensure it's a float
//       }));
//     } else if (splitType === 'exact') {
//       // Validate the exact amounts
//       const totalExactAmount = participants.reduce((sum, participant) => sum + participant.amount, 0);
      
//       if (totalExactAmount !== amount) {
//         return res.status(400).json({ message: "Total exact amounts must equal the total expense amount." });
//       }

//       splitAmounts = participants.map(participant => ({
//         user: participant.user,
//         amount: participant.amount,
//       }));
//     } else if (splitType === 'percentage') {
//       // Validate the percentage amounts
//       const totalPercentage = participants.reduce((sum, participant) => sum + participant.percentage, 0);
      
//       if (totalPercentage !== 100) {
//         return res.status(400).json({ message: "Total percentages must equal 100%." });
//       }

//       splitAmounts = participants.map(participant => ({
//         user: participant.user,
//         amount: ((participant.percentage / 100) * amount).toFixed(2), // Calculate amount based on percentage
//       }));
//     } else {
//       return res.status(400).json({ message: "Invalid split type." });
//     }

//     // Create the expense document with split amounts
//     const expense = await Expense.create({
//       amount,
//       splitType,
//       participants: splitAmounts,
//     });

//     res.status(201).json(expense);
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//   }
// };

// const getExpenses = async (req, res) => {
//   try {
//     const expenses = await Expense.find();
//     res.json(expenses);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// module.exports = { addExpense, getExpenses };
