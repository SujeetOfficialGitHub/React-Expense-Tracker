import React, { useState } from 'react'
import './ExpenseItem.css'
import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate';
import ExpenseDetails from './ExpenseDetails';

const ExpenseItem = (props) => {
  const [newAmt, setNewAmt] = useState(props.expenseItem.amount);
  const [newTitle, setNewTitle] = useState(props.expenseItem.title);
  const delHandler = (e) => {
    e.target.parentElement.remove()
  }
  const changeAmountHandler = () => {
    setNewAmt(100)
  }
  const changeTitleHandler = () => {
    setNewTitle("New Title")
  }
  return (
    <>
        <Card className="expense-item">
          <ExpenseDate date={props.expenseItem.date}/>
          <ExpenseDetails title={newTitle} amount={newAmt}/>
          <button className='delBtn' onClick={delHandler}>Delete</button>
        </Card>
    </>
  )
}

export default ExpenseItem