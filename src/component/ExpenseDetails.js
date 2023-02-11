import React from 'react'

const ExpenseDetails = ({expenseItem}) => {
  return (
    <div className="expense-item__description">
        <h2>{expenseItem.title}</h2>
        <div className="expense-item__price">${expenseItem.amount}</div>
    </div>
  )
}

export default ExpenseDetails