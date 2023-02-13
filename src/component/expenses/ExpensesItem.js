import React from 'react'
import ExpensesDate from './expensesDate'
import './ExpensesItem.css'

const ExpensesItem = (props) => {
  return (
    <>
        <div className="expense-item">
            <ExpensesDate date={props.date} />
            <div className="expenses-description">
                <div>{props.title}</div>
                <div className="expenses-amount">${props.amount}</div>
            </div>
        </div>
    </>
  )
}

export default ExpensesItem