import React, { useState } from "react";
import Header from "@/components/Header";
import TotalIncome from "@/components/expenses/TotalIncome";
import TotalExpense from "@/components/expenses/TotalExpense";
import ExpenseForm from "@/components/expenses/ExpenseForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="page-container">
      <Header />
      <div className="flex-container">
        <div className="income-box">
          <TotalIncome />
        </div>
        <div className="form-box">
          <ExpenseForm />
        </div>
        <div className="expense-box">
          <TotalExpense />
        </div>
      </div>
      <Footer />
    </div>
  );
}
