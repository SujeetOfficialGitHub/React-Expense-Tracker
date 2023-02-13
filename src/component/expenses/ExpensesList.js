import React from 'react'
import ExpenseItem from './ExpenseItem';
import './ExpensesList.css'

const ExpensesList = (props) => {
    if (props.items.length === 0){
        return <h2 className='expenses-list__fallback'>Found no expenses  this year</h2>
    }
    let msg;
    if (props.items.length===1){
        msg = 'Only single Expense here. Please add more...'
    }
      
  return (
    <ul className='expenses-list'>
        <p className='msg'>{msg}</p>
        {props.items.map((expenseItem) => (
        <ExpenseItem key={expenseItem.id} expenseItem={expenseItem}/>
      ))}
    </ul>
  )
}

export default ExpensesList