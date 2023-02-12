import React, { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = () => {
    const [enteredTitle, setEnteredTitle] = useState('')
    const [enteredAmount, setEnteredAmount] = useState('')
    const [enteredDate, setEnteredDate] = useState('')

    // const [userInput, setUserInput] = useState({
    //     enteredTitle : '',
    //     enteredAmount : '',
    //     enteredDate : ''
    // })

    const titleHandler = (e) => {
        setEnteredTitle(e.target.value)
        // setUserInput({
        //     ...userInput,
        //     enteredTitle : e.target.value
        // })
    }
    const amountHandler = (e) => {
        setEnteredAmount(e.target.value)
        // setUserInput({
        //     ...userInput,
        //     enteredAmount : e.target.value
        // })
        
    }
    const dateHandler = (e) => {
        setEnteredDate(e.target.value)
        // setUserInput({
        //     ...userInput,
        //     enteredDate : e.target.value
        // })

    }
    const submitHandler = (e) => {
        e.preventDefault()
        
        const expenseData = {
            title : enteredTitle,
            amount : enteredAmount,
            date : new Date(enteredDate)
        }
        console.log(expenseData)
        setEnteredTitle("")
        setEnteredAmount("")
        setEnteredDate("")
    }
  return (
    <div className="expense-form-container">
        <form onSubmit={submitHandler} id="expense-form" action="">
            <div>
                <label htmlFor="title">Title</label><br />
                <input type="text" onChange={titleHandler} value={enteredTitle} />
            </div>
            <div>
                <label htmlFor="amount">Amount</label><br />
                <input type="number" onChange={amountHandler} value={enteredAmount} min="0" />
            </div>
            <div>
                <label htmlFor="date">Date</label><br />
                <input type="date" onChange={dateHandler} value={enteredDate} />
            </div>
            <button type="submit">Submit</button>
        </form>
    </div>
  )
}

export default ExpenseForm