import React from 'react'
import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate';
import ExpenseDetails from './ExpenseDetails';

const ExpenseItem = ({expenseItem}) => {

  return (
    <>
        <div className="expense-item">
          <ExpenseDate date={expenseItem.date}/>
          <ExpenseDetails expenseItem={expenseItem}/>
        </div>
    </>
  )
}

export default ExpenseItem