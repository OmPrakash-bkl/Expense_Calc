import React from "react";
import "./ExpensesItem.css";
import Card from "../UI/Card";
import ExpensesDate from "./ExpensesDate";

const ExpensesItem = (props) => {

  return (
    <li>
      <Card className="expense-item">
        <ExpensesDate date={props.date}/>
        <div className="expense-item-description">
          <h2>{props.title}</h2>
          <div className="expense-item-price">${props.amount}</div>
        </div>
      </Card>
    </li>
  );
};

export default ExpensesItem;
