import React, { useState, useEffect, useContext } from "react";
import { TransactionsContext } from "@/context/TransactionsContext";

const TotalExpense = () => {
  const { transactions } = useContext(TransactionsContext); // Use context to get transactions
  const [totalExpense, setTotalExpense] = useState(0);

  useEffect(() => {
    // Calculate total expense
    const expense = transactions
      .filter((transaction) => transaction.type === "expense")
      .reduce((total, transaction) => total + transaction.amount, 0);

    setTotalExpense(expense);
  }, [transactions]);

  return (
    <div>
      <h2>Total Expense</h2>
      <p style={{ color: "red" }}>${totalExpense}</p>
    </div>
  );
};

export default TotalExpense;
