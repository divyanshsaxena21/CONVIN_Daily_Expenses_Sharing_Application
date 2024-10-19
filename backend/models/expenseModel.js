const mongoose = require('mongoose');

const expenseSchema = new mongoose.Schema({
  amount: { type: Number, required: true },
  splitType: { type: String, required: true },  // equal, exact, percentage
  participants: [{ user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }, amount: Number }],
  createdAt: { type: Date, default: Date.now },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' } // Associate expense with a user
});

module.exports = mongoose.model('Expense', expenseSchema);

// const mongoose = require('mongoose');

// const expenseSchema = new mongoose.Schema({
//   amount: { type: Number, required: true },
//   splitType: { type: String, required: true },  // equal, exact, percentage
//   participants: [{ user: String, amount: Number }],
//   createdAt: { type: Date, default: Date.now },
// });

// module.exports = mongoose.model('Expense', expenseSchema);
