import React, { useState } from 'react';
import './ExpenseForm.css'

const ExpenseForm = (props) => {
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
        const enteredData = {
            title : enteredTitle,
            amount : enteredAmount,
            date : new Date(enteredDate),
            id : Math.random().toString()
        }
        props.onSaveEnteredData(enteredData)
        setEnteredTitle('')
        setEnteredAmount('')
        setEnteredDate('')
        
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
                <input type="number" value={enteredAmount} onChange={amountHandler} />
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