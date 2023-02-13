import React from 'react'
import './ExpensesItem.css'

const ExpensesItem = () => {
  return (
    <>
        <div className="expense-item">
            <div className="date-box">
                <div>May</div>
                <div>2020</div>
                <div>05</div>
            </div>
            <div className="expenses-description">
                <div>Pizza</div>
                <div className="expenses-amount">$300</div>
            </div>
        </div>
    </>
  )
}

export default ExpensesItem