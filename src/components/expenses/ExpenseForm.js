import React, { useContext } from "react";
import { TransactionsContext } from "@/context/TransactionsContext";

export default function ExpenseForm() {
  const { transactions, addTransaction, deleteTransaction, balance } =
    useContext(TransactionsContext);

  const handleAddTransaction = (e) => {
    e.preventDefault();

    const type = e.target.type.value;
    const description = e.target.description.value;
    const amount = parseFloat(e.target.amount.value);
    const date = e.target.date.value;

    if (!description || !amount || !date || isNaN(amount)) {
      alert("Please fill in all fields correctly!");
      return;
    }

    const newTransaction = {
      id: Date.now(),
      type,
      amount,
      description,
      date,
    };

    addTransaction(newTransaction);
    e.target.reset();
  };

  return (
    <div className="tracker-box">
      <h1 className="tracker-title">Add Your Transactions Here</h1>
      <h2 className={`balance ${balance >= 0 ? "positive" : "negative"}`}>
        Balance: ${balance}
      </h2>

      {/* Display transactions */}
      {transactions.length > 0 ? (
        <table className="transaction-table">
          <tbody>
            {transactions.map((transaction) => (
              <tr key={transaction.id}>
                <td
                  className={
                    transaction.type === "income" ? "income" : "expense"
                  }
                >
                  {transaction.type === "income" ? "+" : "-"} $
                  {transaction.amount}
                </td>
                <td>{transaction.description}</td>
                <td>{transaction.date}</td>
                <td>
                  <button
                    className="delete-btn"
                    onClick={() => deleteTransaction(transaction.id)}
                  >
                    🗑️
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No transactions added yet.</p>
      )}

      <form className="add-item-form" onSubmit={handleAddTransaction}>
        <select name="type" className="type-select">
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </select>
        <input
          type="text"
          name="description"
          placeholder="Description"
          className="input"
        />
        <input
          type="number"
          name="amount"
          placeholder="Amount"
          className="input"
        />
        <input type="date" name="date" className="input" />
        <button type="submit" className="add-btn">
          Add Transaction
        </button>
      </form>
    </div>
  );
}

// if(balance==style= {{ }}
