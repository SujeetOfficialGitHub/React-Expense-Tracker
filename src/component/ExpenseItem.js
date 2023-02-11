import React from 'react'
import './ExpenseItem.css'

const ExpenseItem = () => {
  const expenseDate = new Date(2023, 20, 3);
  const expenseTitle = "Car Insurence";
  const LocationOfExpenditure = "Delhi";
  const expenseAmount = 100;
  return (
    <>
        <div className="expense-item">
          <div>{expenseDate.toISOString()}</div>
          <div className="expense-item__description">
            <h2>{expenseTitle}</h2>
            <h2>{LocationOfExpenditure}</h2>
            <div className="expense-item__price">${expenseAmount}</div>
          </div>
        </div>
    </>
  )
}

export default ExpenseItem