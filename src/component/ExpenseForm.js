import React, { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = () => {
    const [title, setTitle] = useState()
    const [amount, setAmount] = useState()
    const [date, setDate] = useState()

    const titleHandler = (e) => {
        console.log(e.target.value)
    }
    const amountHandler = (e) => {
        console.log(e.target.value)
        
    }
    const dateHandler = (e) => {
        console.log(e.target.value)

    }
    const submitHandler = (e) => {
        e.preventDefault()
    }
  return (
    <div className="expense-form-container">
        <form onSubmit={submitHandler} id="expense-form" action="">
            <div>
                <label htmlFor="title">Title</label><br />
                <input type="text" onChange={titleHandler} value={title} />
            </div>
            <div>
                <label htmlFor="amount">Amount</label><br />
                <input type="number" onChange={amountHandler} value={amount} min="0" />
            </div>
            <div>
                <label htmlFor="date">Date</label><br />
                <input type="date" onChange={dateHandler} value={date} />
            </div>
            <button type="submit">Submit</button>
        </form>
    </div>
  )
}

export default ExpenseForm