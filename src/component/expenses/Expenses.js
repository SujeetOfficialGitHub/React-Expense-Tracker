import React, { useState } from 'react';
import './Expenses.css'
import ExpenseItem from './ExpenseItem';
import ExpenseFilter from './ExpenseFilter';
const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2022');

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  }
  return (
        <div className="expenses">
          <ExpenseFilter selected={filteredYear} onchange={filterChangeHandler} />
        {props.expensesList.map((expenseItem,i) => (
            <ExpenseItem key={expenseItem.id} expenseItem={expenseItem}/>
        ))}
        </div>
  )
}

export default Expenses