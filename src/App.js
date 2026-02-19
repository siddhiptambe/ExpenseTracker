import React, { useState } from "react";
import TransactionForm from "./TransactionForm";
import TransactionList from "./TransactionList";
import Summary from "./Summary";
import "./App.css";
import ExpenseChart from "./ExpenseChart";

function App() {
  const [transactions, setTransactions] = useState([]);

  const addTransaction = (transaction) => {
    setTransactions([...transactions, transaction]);
  };

  const deleteTransaction = (id) => {
    const updatedTransactions = transactions.filter(
      (transaction) => transaction.id !== id
    );
    setTransactions(updatedTransactions);
  };

  const totalIncome = transactions
    .filter((t) => t.type === "Income")
    .reduce((acc, t) => acc + t.amount, 0);

  const totalExpense = transactions
    .filter((t) => t.type === "Expense")
    .reduce((acc, t) => acc + t.amount, 0);

  const balance = totalIncome - totalExpense;

  return (
  <div className="container">
    <h1>Expense Dashboard</h1>

    <div className="dashboard">

      <div className="left-panel">
        <ExpenseChart transactions={transactions} />
        <Summary
          balance={balance}
          income={totalIncome}
          expense={totalExpense}
        />
      </div>

      <div className="right-panel">
        <TransactionForm addTransaction={addTransaction} />
        <TransactionList
          transactions={transactions}
          deleteTransaction={deleteTransaction}
        />
      </div>

    </div>
  </div>
);
}

export default App;
