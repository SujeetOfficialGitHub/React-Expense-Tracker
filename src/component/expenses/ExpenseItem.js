import React from 'react'
import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate';
import ExpenseDetails from './ExpenseDetails';

const ExpenseItem = (props) => {
  const delHandler = (e) => {
    e.target.parentElement.remove()
  }
  return (
    <>
        <div className="expense-item">
          <ExpenseDate date={props.expenseItem.date}/>
          <ExpenseDetails title={props.expenseItem.title} amount={props.expenseItem.amount}/>
          <button className='delBtn' onClick={delHandler}>Delete</button>
        </div>
    </>
  )
}

export default ExpenseItem