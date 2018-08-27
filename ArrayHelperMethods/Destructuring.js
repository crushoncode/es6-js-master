const expense = {
  type: 'Business',
  amount: '$45 USD'
};

// const type = expense.type;
// const amount = expense.amount;

// ES6
// declare a new variable called type and amount and make it to reference the expense.type/amount property
// create two constant variables and they are declared with the names of type & amount and
// they get assigned the value of the property expense.type and expense.amount.

const { type, amount } = expense;
console.log(type, amount);
