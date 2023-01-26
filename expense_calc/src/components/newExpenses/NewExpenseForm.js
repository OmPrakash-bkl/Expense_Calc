import React, { useState } from "react";
import "./NewExpenseForm.css";

const NewExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const [titleError, setTitleError] = useState(false);
  const [amountError, setAmountError] = useState(false);
  const [dateError, setDateError] = useState(false);

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();

    if (enteredTitle == "") {
      setTitleError(true);
    } else {
      setTitleError(false);
    }

    if (enteredAmount == "") {
      setAmountError(true);
    } else {
      setAmountError(false);
    }

    if (enteredDate == "") {
      setDateError(true);
    } else {
      setDateError(false);
    }

    if (enteredTitle != "" && enteredAmount != "" && enteredDate != "") {
      const expenseData = {
        title: enteredTitle,
        amount: enteredAmount,
        date: new Date(enteredDate),
      };

      props.onSaveExpenseData(expenseData);
      setEnteredTitle("");
      setEnteredAmount("");
      setEnteredDate("");
    }
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="newExpenseForm-controls">
        <div className="newExpenseForm-control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
           { titleError && <p className='form_error'>Enter the Title!</p> }
        </div>
        <div className="newExpenseForm-control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
           { amountError && <p className='form_error'>Enter the Amount!</p> }
        </div>
        <div className="newExpenseForm-control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
           { dateError && <p className='form_error'>Pick the Date!</p> }
        </div>
      </div>
      <div className="newExpenseForm-submit-controls">
        <button
          type="button"
          className="addNewExpenseBtns"
          onClick={props.onCancel}
        >
          Cancel
        </button>
        <button type="submit" className="addNewExpenseBtns">
          Add Expense
        </button>
      </div>
    </form>
  );
};

export default NewExpenseForm;
