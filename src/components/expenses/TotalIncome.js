import React, { useState, useEffect, useContext } from "react";
import { TransactionsContext } from "@/context/TransactionsContext";

const TotalIncome = () => {
  const { transactions } = useContext(TransactionsContext); // Use context to get transactions
  const [totalIncome, setTotalIncome] = useState(0);

  useEffect(() => {
    // Calculate total income
    const income = transactions
      .filter((transaction) => transaction.type === "income")
      .reduce((total, transaction) => total + transaction.amount, 0);

    setTotalIncome(income);
  }, [transactions]);

  return (
    <div>
      <h2>Total Income</h2>
      <p style={{ color: "green" }}>${totalIncome}</p>
    </div>
  );
};

export default TotalIncome;
