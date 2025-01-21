export default function ExpenseItem({ description, amount, date }) {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        margin: "10px",
        padding: "10px",
        width: "80%",
      }}
    >
      <p>
        <strong>Description:</strong> {description}
      </p>
      <p>
        <strong>Amount:</strong> ${amount}
      </p>
      <p>
        <strong>Date:</strong> {date}
      </p>
    </div>
  );
}
