import React, { useContext, useState } from "react";
import Header from "@/components/Header";
import ExpenseForm from "@/components/expenses/Expenseform";
import TotalIncome from "@/components/expenses/TotalIncome";
import TotalExpense from "@/components/expenses/TotalExpense";
import { TransactionsContext } from "@/context/TransactionsContext";

export default function Home() {
  const { transactions } = useContext(TransactionsContext);

  return (
    <div className="page-container">
      <Header />
      <div className="flex-container">
        <div className="income-box">
          <TotalIncome transactions={transactions} />
        </div>
        <div className="tracker-box">
          <ExpenseForm />
        </div>
        <div className="expense-box">
          <TotalExpense transactions={transactions} />
        </div>
      </div>
    </div>
  );
}
