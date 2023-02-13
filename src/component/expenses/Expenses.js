import React from 'react'
import './Expenses.css'
import ExpensesItem from './ExpensesItem'
const Expenses = (props) => {
  return (
    <div className="expenses">
        {props.expenses.map((item, i) => (
          <ExpensesItem key={item.id} title={props.expenses[i].title} amount={props.expenses[i].amount} date={props.expenses[i].date} />
        ))}
    </div>
  )
}

export default Expenses