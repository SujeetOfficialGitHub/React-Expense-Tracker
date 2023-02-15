import React from 'react'
import ExpensesItem from './ExpensesItem'
import './ExpensesLIst.css'

const ExpensesLIst = (props) => {
    if (props.expenses.length===0){
        return <p className='msg'>Items Not Found</p>
    }
  return (
    <>
        {props.expenses.map(expense => <ExpensesItem key={expense.id} expense={expense} />)}
    </>
  )
}

export default ExpensesLIst