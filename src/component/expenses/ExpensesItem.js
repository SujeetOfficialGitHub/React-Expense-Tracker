import React from 'react'
import './ExpensesItem.css'

const ExpensesItem = (props) => {
  return (
    <>
        <div className="expense-item">
            <div className="date-box">
                <div>May</div>
                <div>2020</div>
                <div>05</div>
            </div>
            <div className="expenses-description">
                <div>{props.title}</div>
                <div className="expenses-amount">${props.amount}</div>
            </div>
        </div>
    </>
  )
}

export default ExpensesItem