import React, { useContext } from "react";
import { useRouter } from "next/router";
import { TransactionsContext } from "@/context/TransactionsContext";
import useCategories from "@/hooks/useCategories";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import Header from "@/components/Header";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function Dashboard() {
  const { transactions } = useContext(TransactionsContext);
  const { incomeCategories, expenseCategories } = useCategories();
  const router = useRouter();

  // Calculate data for the Doughnut Chart
  const incomeData = calculateCategoryTotals(
    transactions,
    incomeCategories,
    "income"
  );
  const expenseData = calculateCategoryTotals(
    transactions,
    expenseCategories,
    "expense"
  );

  const chartData = {
    labels: [...incomeCategories, ...expenseCategories],
    datasets: [
      {
        label: "Transaction Breakdown",
        data: [...incomeData, ...expenseData],
        backgroundColor: [
          ...generateColors(incomeCategories.length, "income"),
          ...generateColors(expenseCategories.length, "expense"),
        ],
        borderWidth: 1,
      },
    ],
  };

  const handleAddMoreTransactions = () => {
    router.push("/"); // Navigate to the home page for adding transactions
  };

  return (
    <div>
      <Header />
      <div className="dashboard-box">
        <h1>Dashboard</h1>
        <div className="chart-container">
          <Doughnut data={chartData} />
        </div>
        <button className="add-btn" onClick={handleAddMoreTransactions}>
          Add More Transactions
        </button>
      </div>
    </div>
  );
}

// Helper to calculate totals for each category
function calculateCategoryTotals(transactions, categories, type) {
  return categories.map((category) => {
    return transactions
      .filter((t) => t.type === type && t.category === category)
      .reduce((total, t) => total + t.amount, 0);
  });
}

// Helper to generate colors for the chart
function generateColors(count, type) {
  const baseColors = {
    income: ["#4caf50", "#81c784", "#388e3c", "#66bb6a"],
    expense: ["#f44336", "#e57373", "#d32f2f", "#ff8a80"],
  };
  const colors = type === "income" ? baseColors.income : baseColors.expense;
  return Array.from({ length: count }, (_, i) => colors[i % colors.length]);
}
