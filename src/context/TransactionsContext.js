import React, { createContext, useState, useEffect } from "react";
import { calculateBalance } from "@/components/expenses/Balance";

//Create the context
export const TransactionsContext = createContext();

// TransactionsProvider component
export const TransactionsProvider = ({ children }) => {
  const [transactions, setTransactions] = useState([]);

  // Load transactions from localStorage when the component mounts
  useEffect(() => {
    const storedTransactions = localStorage.getItem("transactions");
    if (storedTransactions) {
      setTransactions(JSON.parse(storedTransactions));
    }
  }, []);

  // Save transactions to localStorage whenever they change
  useEffect(() => {
    if (transactions.length > 0) {
      localStorage.setItem("transactions", JSON.stringify(transactions));
    }
  }, [transactions]);

  // Calculate balance dynamically using the utility function
  const balance = calculateBalance(transactions);

  //Add a transaction
  const addTransaction = (newTransaction) => {
    setTransactions((prev) => [...prev, newTransaction]);
  };

  //Delete a transaction
  const deleteTransaction = (id) => {
    setTransactions((prev) => {
      const updatedTransactions = prev.filter(
        (transaction) => transaction.id !== id
      );

      // Save updated transactions to localStorage
      localStorage.setItem("transactions", JSON.stringify(updatedTransactions));

      return updatedTransactions; // Update state
    });
  };

  return (
    <TransactionsContext.Provider
      value={{ transactions, balance, addTransaction, deleteTransaction }}
    >
      {children}
    </TransactionsContext.Provider>
  );
};
