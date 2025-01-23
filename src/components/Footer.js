export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} Expense Tracker.</p>
      </div>
    </footer>
  );
}
