import React from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpenses.css';

const NewExpenses = () => {
  return (
    <div className='expense-form-box'>
        <ExpenseForm />
    </div>
  )
}

export default NewExpenses