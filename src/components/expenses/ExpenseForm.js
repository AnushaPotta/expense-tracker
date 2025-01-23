import React, { useContext, useState } from "react";
import { TransactionsContext } from "@/context/TransactionsContext";
import { useRouter } from "next/router";
import useCategories from "@/hooks/useCategories";
import { toast } from "react-toastify";

export default function ExpenseForm() {
  const { transactions, addTransaction, deleteTransaction, balance } =
    useContext(TransactionsContext);

  const { incomeCategories, expenseCategories, addCategory } = useCategories();
  const router = useRouter();
  const [newCategory, setNewCategory] = useState("");
  const [type, setType] = useState("income"); // Default type

  const handleAddTransaction = (e) => {
    e.preventDefault();

    const category = e.target.category.value;
    const amount = parseFloat(e.target.amount.value);
    const date = e.target.date.value;

    if (!category || !amount || !date || isNaN(amount)) {
      alert("Please fill in all fields correctly!");
      return;
    }

    const newTransaction = {
      id: Date.now(),
      type,
      amount,
      category,
      date,
    };

    addTransaction(newTransaction);
    e.target.reset();
  };

  const handleAddCategory = () => {
    if (newCategory.trim()) {
      addCategory(type, newCategory);
      setNewCategory("");
    }
  };

  const handleTypeChange = (e) => {
    setType(e.target.value);
  };

  const handleGoToDashboard = () => {
    if (transactions.length === 0) {
      toast.error("Please add transactions first!", {
        position: "top-center",
        autoClose: 3000, // Closes after 3 seconds
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
      });
      return;
    }
    router.push("/dashboard");
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
                <td>{transaction.category}</td>
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
        <select
          name="type"
          className="type-select"
          value={type}
          onChange={handleTypeChange}
        >
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </select>

        <select name="category" className="type-select">
          {(type === "income" ? incomeCategories : expenseCategories).map(
            (cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            )
          )}
        </select>

        <input
          type="number"
          name="amount"
          placeholder="Amount"
          className="input"
        />
        <input type="date" name="date" className="input" />

        <div className="button-group">
          <button type="submit" className="add-btn">
            Add Transaction
          </button>
          <button
            type="button"
            className="dashboard-btn"
            onClick={handleGoToDashboard}
          >
            Go to Dashboard
          </button>
        </div>
      </form>
    </div>
  );
}
