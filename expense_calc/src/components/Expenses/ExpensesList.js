import React from "react";
import "./ExpensesList.css";
import ExpensesItem from "./ExpensesItem";

const ExpensesList = (props) => {
  if (props.items.length == 0) {
    return <h1 className="no-expense-fallback">No Expense Found!</h1>;
  }

  return (
    <ul className="expense-list">
      {props.items.map((expense) => {
        return <ExpensesItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      })}
    </ul>
  );
};

export default ExpensesList;
