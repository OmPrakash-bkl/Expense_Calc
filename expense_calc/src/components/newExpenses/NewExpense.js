import React, { useState } from 'react';
import './NewExpense.css';
import Card from '../UI/Card';
import NewExpenseForm from './NewExpenseForm';

const NewExpense = (props) => {
    const [ isEditing, setIsEditing ] = useState(false);
    const startEditingHandler = () => {
        setIsEditing(true);
    }
    const stopEditingHandler = () => {
        setIsEditing(false);
    }

    const saveExpenseDataHandler = (newExpense) => {
        const expenseData = {
            ...newExpense,
            id: Math.random().toString()
        }
        props.onAddExpense(expenseData);
        setIsEditing(false);
    }

return (
    <Card className='newExpenseContainer'>
        { !isEditing && <button className='addNewExpenseBtns' onClick={startEditingHandler} >Add New Expense</button> }
        { isEditing && <NewExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={stopEditingHandler} /> }
    </Card>
)
}

export default NewExpense;