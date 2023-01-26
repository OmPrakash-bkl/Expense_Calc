import React, { useState } from "react";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesChart from "./ExpensesChart";
import ExpensesList from "./ExpensesList";
import Card from "../UI/Card";

const Expenses = (props) => {

  const [selectYear, setSelectYear] = useState('2020');

  const filterYearChangeHandler = (selectedYear) => {
    setSelectYear(selectedYear);
  }

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === selectYear;
  })
  

  return (
    <Card className='expenses'>
      <ExpensesFilter selectYear={selectYear} setSelectYear={filterYearChangeHandler} />
      <ExpensesChart expenses={filteredExpenses} />
      <ExpensesList items={filteredExpenses} />
    </Card>
  );
};

export default Expenses;
