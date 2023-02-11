import React from 'react'
import './ExpenseItem.css'

const ExpenseItem = ({expenseItem}) => {
  return (
    <>
        <div className="expense-item">
          <div>{expenseItem.date}</div>
          <div className="expense-item__description">
            <h2>{expenseItem.title}</h2>
            <h2>{expenseItem.location}</h2>
            <div className="expense-item__price">${expenseItem.amount}</div>
          </div>
        </div>
    </>
  )
}

export default ExpenseItem