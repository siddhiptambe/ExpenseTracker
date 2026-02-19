import React from "react";

function Summary({ balance, income, expense }) {
  return (
    <div className="summary">
      <h2>Balance: ₹{balance}</h2>
      <div className="summary-details">
        <p>Total Income: ₹{income}</p>
        <p>Total Expenses: ₹{expense}</p>
      </div>
    </div>
  );
}

export default Summary;
