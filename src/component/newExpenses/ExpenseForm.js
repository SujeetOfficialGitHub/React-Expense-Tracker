import React, { useState } from 'react';
import './ExpensesForm.css'

const ExpenseForm = () => {
    const [enteredTitle, setEnteredTitle] = useState('')
    const [enteredamount, setEnteredAmount] = useState('')
    const [enteredDate, setEnteredDate] = useState('')

    const titleHandler = (e) => {
        setEnteredTitle(e.target.value)
    }
    const amountHandler = (e) => {
        setEnteredAmount(e.target.value)
        
    }
    const dateHandler = (e) => {
        setEnteredDate(e.target.value)

    }
    const submitHandler = (e) => {
        e.preventDefault()
        const enteredData = {
            title : enteredTitle,
            amount : enteredamount,
            date : enteredDate
        }
        console.log(enteredData)
        
    }
  return (
    <>
        <form onSubmit={submitHandler} action="">
            <div className="input-box">
                <label htmlFor="title">Title</label><br />
                <input type="text" value={enteredTitle} onChange={titleHandler} />
            </div>
            <div className="input-box">
                <label htmlFor="amount">Amount</label><br />
                <input type="number" value={enteredamount} onChange={amountHandler} />
            </div>
            <div className="input-box">
                <label htmlFor="date">Date</label><br />
                <input type="date" value={enteredDate} onChange={dateHandler} />
            </div>
            <div className="btn">
                <input className='submit-btn' type="submit" value="Submit" />
            </div>
        </form>
    </>
  )
}

export default ExpenseForm