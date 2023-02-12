import React from 'react'
import './ExpenseItem.css'
import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate';
import ExpenseDetails from './ExpenseDetails';

const ExpenseItem = ({expenseItem}) => {
  const delHandler = (e) => {
    e.target.parentElement.remove()
  }
  return (
    <>
        <Card className="expense-item">
          <ExpenseDate date={expenseItem.date}/>
          <ExpenseDetails expenseItem={expenseItem}/>
          <button className='delBtn' onClick={delHandler}>Delete</button>
        </Card>
    </>
  )
}

export default ExpenseItem