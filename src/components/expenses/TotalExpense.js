import React, { useState, useEffect } from "react";

const TotalExpense = ({ transactions }) => {
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
      <h2>Expense</h2>
      <p style={{ color: "red" }}>${totalExpense}</p>
    </div>
  );
};

export default TotalExpense;

/*style={{
        border: "1px solid red",
        padding: "10px",
        borderRadius: "8px",
        textAlign: "center",
        backgroundColor: "#fdecea",
        color: "#c62828",
      }}*/
