import ExpenseItem from "./ExpenseItem";

const expenses = [
  { id: 1, description: "Groceries", amount: 50, date: "2025-01-10" },
  { id: 2, description: "Transport", amount: 20, date: "2025-01-11" },
];

export default function ExpenseList() {
  return (
    <div style={{ marginLeft: "10px" }}>
      <h2>Your Expenses</h2>
      <ul>
        {expenses.map((expense) => (
          <ExpenseItem key={expense.id} {...expense} />
        ))}
      </ul>
    </div>
  );
}
