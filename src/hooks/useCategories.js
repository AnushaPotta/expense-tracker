import { useState } from "react";

function useCategories() {
  const [incomeCategories, setIncomeCategories] = useState([
    "Salary",
    "Investment",
    "Business",
    "Other",
  ]);

  const [expenseCategories, setExpenseCategories] = useState([
    "Rent",
    "Food",
    "Utilities",
    "Entertainment",
    "Other",
  ]);

  const addCategory = (type, category) => {
    if (type === "income") {
      setIncomeCategories((prev) =>
        prev.includes(category) ? prev : [...prev, category]
      );
    } else if (type === "expense") {
      setExpenseCategories((prev) =>
        prev.includes(category) ? prev : [...prev, category]
      );
    }
  };

  const removeCategory = (type, category) => {
    if (type === "income") {
      setIncomeCategories((prev) => prev.filter((cat) => cat !== category));
    } else if (type === "expense") {
      setExpenseCategories((prev) => prev.filter((cat) => cat !== category));
    }
  };

  return {
    incomeCategories,
    expenseCategories,
    addCategory,
    removeCategory,
  };
}

export default useCategories;
