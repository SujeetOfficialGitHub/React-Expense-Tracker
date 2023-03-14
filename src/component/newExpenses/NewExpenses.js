import React from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpenses.css';

const NewExpenses = (props) => {
  const saveExpensesDataHandler = (expensesData) => {
    props.onAddExpenses(expensesData)
  }

  return (
    <div className='expense-form-box'>
        <ExpenseForm onSaveEnteredData={saveExpensesDataHandler} />
    </div>
  )
}

export default NewExpenses