/**
 * Calculate the total balance based on transactions
 * @param {Array} transactions - List of transactions
 * @returns {number} - Calculated balance
 */
export const calculateBalance = (transactions) => {
  return transactions.reduce((balance, transaction) => {
    return transaction.type === "income"
      ? balance + transaction.amount
      : balance - transaction.amount;
  }, 0); // Initial balance is 0
};
