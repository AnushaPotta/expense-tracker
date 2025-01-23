import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <h1 className="header-title">Welcome to Expense Tracker</h1>
        <p className="header-description">Track your expenses effortlessly!</p>
      </div>
    </header>
  );
};
export default Header;
