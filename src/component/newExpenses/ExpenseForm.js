import React, { useState } from 'react';
import './ExpenseForm.css'

const ExpenseForm = (props) => {
    const [enteredTitle, setEnteredTitle] = useState('')
    const [enteredAmount, setEnteredAmount] = useState('')
    const [enteredDate, setEnteredDate] = useState('')
    const [emptyFieldMsg, setEmptyFieldMsg] = useState('')

    const [showExpenseForm, setShowExpenseForm] = useState(false);
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
    setTimeout(() => {
        setEmptyFieldMsg('')
    },10000)

    const submitHandler = (e) => {
        e.preventDefault()
        if (enteredTitle==='' || enteredAmount==='' || enteredDate===''){
            setEmptyFieldMsg(<p>All fields are required</p>)
        }else{
            const enteredData = {
                title : enteredTitle,
                amount : enteredAmount,
                date : new Date(enteredDate),
                id : Math.random().toString()
            }
            setEmptyFieldMsg('')
            props.onSaveEnteredData(enteredData)
            setEnteredTitle('')
            setEnteredAmount('')
            setEnteredDate('')
        }
        
    }
    const showExpenseFormHandler = () => {
        setShowExpenseForm(true)
      }
    const hideExpenseFormHandler = () => {
        setShowExpenseForm(false)
      }
    

    
  return (
    <>
        {!showExpenseForm && 
            <div className="show-form">
                <button onClick={showExpenseFormHandler}>Add New Expenses</button>
            </div>
        }
        {showExpenseForm && 
            <>
            {emptyFieldMsg && <p className='form-field-msg'>{emptyFieldMsg}</p>}
            <form onSubmit={submitHandler} className="expense-form" action="">
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
                    <input className='close-btn' onClick={hideExpenseFormHandler} type="button" value="Close" />
                </div>
            </form>
            </>
        }
    </>
  )
}

export default ExpenseForm