import React from 'react';
import './ExpensesFilter.css';

const ExpensesFilter = (props) => {

    const dropdownChangeHandler = (event) => {
        props.setSelectYear(event.target.value);
    }

return (
    <div className='expenses-filter-container'>
        <label className='expenses-label'>Filter by year</label>
        <select className='expenses-menus' value={props.selectYear} onChange={dropdownChangeHandler}>
            <option value='2019'>2019</option>
            <option value='2020'>2020</option>
            <option value='2021'>2021</option>
            <option value='2022'>2022</option>
        </select>
    </div>
)
}

export default ExpensesFilter;