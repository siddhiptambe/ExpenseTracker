import React from "react";

function TransactionList({ transactions, deleteTransaction }) {
  return (
    <div className="transaction-list">
      <h2>Transactions</h2>

      {transactions.length === 0 && <p>No transactions added yet.</p>}

      <ul>
        {transactions.map((transaction) => (
          <li key={transaction.id}>
            <span>
              {transaction.description} - ₹{transaction.amount} ({transaction.type})
            </span>
            <button onClick={() => deleteTransaction(transaction.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TransactionList;
