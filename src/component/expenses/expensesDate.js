import React from 'react'
import './ExpensesDate.css'

const ExpensesDate = (props) => {
  const month = props.date.toLocaleDateString('en-US',{month:"long"});
  const day = props.date.toLocaleDateString('en-US',{day:"2-digit"});
  const year = props.date.getFullYear()

  return (
    <div className="date-box">
        <div>{month}</div>
        <div>{year}</div>
        <div>{day}</div>
    </div>
  )
}

export default ExpensesDate