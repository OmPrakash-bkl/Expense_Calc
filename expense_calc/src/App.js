import React, { useState } from 'react';
import './App.css';
import NewExpense from './components/newExpenses/NewExpense';
import Expenses from './components/Expenses/Expenses';

const DUMMY_EXPENSES = [
  {
    id: '01',
    title: 'Laptop',
    amount: 99.10,
    date: new Date(2020, 4, 15)
  },
  {
    id: '02',
    title: 'Mobile Charger',
    amount: 232.57,
    date: new Date(2021, 8, 5)
  },
  {
    id: '03',
    title: 'Mouse',
    amount: 12.00,
    date: new Date(2022, 12, 25)
  },
  {
    id: '04',
    title: 'Keyboard',
    amount: 50.00,
    date: new Date(2020, 6, 20)
  }
]

function App() {

  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    })
  }

  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
