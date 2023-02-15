import React from 'react'
import ExpensesDate from './expensesDate'
import './ExpensesItem.css'

const ExpensesItem = (props) => {
  return (
    <>
        <div className="expense-item">
            <ExpensesDate date={props.expense.date} />
            <div className="expenses-description">
                <div>{props.expense.title}</div>
                <div className="expenses-amount">${props.expense.amount}</div>
            </div>
        </div>
    </>
  )
}

export default ExpensesItem