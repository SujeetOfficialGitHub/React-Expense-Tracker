import React from 'react';
import './Expenses.css'
import ExpenseItem from './ExpenseItem';

const Expenses = (props) => {
  return (
        <div className="expenses">
        {props.expensesList.map((expenseItem,i) => (
            <ExpenseItem key={expenseItem.id} expenseItem={expenseItem}/>
        ))}
        </div>
  )
}

export default Expenses