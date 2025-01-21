import React, { useState, useEffect } from "react";

const TotalIncome = ({ transactions }) => {
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
      <h2>Income</h2>
      <p style={{ color: "green" }}>${totalIncome}</p>
    </div>
  );
};

export default TotalIncome;

/*style={{
        border: "1px solid green",
        padding: "10px",
        borderRadius: "8px",
        textAlign: "center",
        backgroundColor: "#e0f7e9",
        color: "#2e7d32",
      }}*/
