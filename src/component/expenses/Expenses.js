import React, { useState } from 'react'
import './Expenses.css'
import ExpensesFilter from './ExpensesFilter'
import ExpensesLIst from './ExpensesLIst';
const Expenses = (props) => {
    console.log(props)
  // Receive user selected Year from ExpensesFilter
  const [filteredYear, setFilteredYear] = useState('2022')
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear)
  }
//   Filter expenses Items as user selected year 
  const filteredExpenses = props.expenses.filter((item) => {
    return item.date.getFullYear().toString() === filteredYear
  })

  return (
    <div className="expenses">
        <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
        
        {/* Check if selected year items list is Empty then show a message  */}
        {/* {filteredExpenses.length === 0 ? <p style={{color:"white"}}>Post Not Found</p> : filteredExpenses.map((expenseItem) => (
          <ExpensesItem key={expenseItem.id} expenses={expenseItem} />
        ))} */}

        {/* Check if selected year items list is Empty then show a message  */}
        {/* {filteredExpenses.length ===0 && <p style={{color:'white'}}>Post not found</p>}
        {filteredExpenses.length>0 && filteredExpenses.map((expenseItem) => (
          <ExpensesItem key={expenseItem.id} expenses={expenseItem} />
        ))} */}
        <ExpensesLIst expenses={filteredExpenses} />
    </div>
  )
}

export default Expenses