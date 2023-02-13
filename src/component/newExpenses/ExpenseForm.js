import React from 'react';
import './ExpensesForm.css'

const ExpenseForm = () => {
  return (
    <>
        <form id='input-form' action="">
            <div className="input-box">
                <label htmlFor="title">Title</label><br />
                <input type="text"  />
            </div>
            <div className="input-box">
                <label htmlFor="amount">Amount</label><br />
                <input type="number"  />
            </div>
            <div className="input-box">
                <label htmlFor="date">Date</label><br />
                <input type="date"  />
            </div>
            <div className="btn">
                <input className='submit-btn' type="submit" value="Submit" />
            </div>
        </form>
    </>
  )
}

export default ExpenseForm