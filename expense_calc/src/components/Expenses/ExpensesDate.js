import React from 'react';
import './ExpensesDate.css';

const ExpensesDate = (props) => {

const month = props.date.toLocaleString("en-US", { month: "long" });
const day = props.date.toLocaleString("en-US", { day: "2-digit" });
const year = props.date.getFullYear();

return <div className='expenses-date'>
<div className='expenses-date-month'>{month}</div>
<div className='expenses-date-year'>{year}</div>
<div className='expenses-date-day'>{day}</div>
</div>
}

export default ExpensesDate;
