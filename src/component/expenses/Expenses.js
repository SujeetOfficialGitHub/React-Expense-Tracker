import React from 'react'
import './Expenses.css'
import ExpensesItem from './ExpensesItem'
const Expenses = () => {
  return (
    <div className="expenses">
        <ExpensesItem />
        <ExpensesItem />
        <ExpensesItem />
        <ExpensesItem />
    </div>
  )
}

export default Expenses