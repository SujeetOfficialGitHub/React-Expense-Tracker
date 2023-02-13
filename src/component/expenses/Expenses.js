import React, { useState } from 'react';
import Card from '../UI/Card'
import './Expenses.css'
import ExpensesList from './ExpensesList';
import ExpenseFilter from './ExpenseFilter';

const Expenses = (props) => {
  
  const [filteredYear, setFilteredYear] = useState('2022');

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  }
  const filteredExpenses = props.expensesList.filter(expense => {
    return expense.date.getFullYear().toString() ===filteredYear;
  });


  

  return (
        <Card className="expenses">
          <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />

          {/* {filteredExpenses.length === 0 && <p>No Post Found</p>}
          {filteredExpenses.length > 0 && filteredExpenses.map((expenseItem,i) => (
            <ExpenseItem key={expenseItem.id} expenseItem={expenseItem}/>
        ))} */}

        {/* {filteredExpenses.length===0 ? <p>Post Not Found</p> : filteredExpenses.map((expenseItem) => (
            <ExpenseItem key={expenseItem.id} expenseItem={expenseItem}/>
        ))} */}
          
          
        <ExpensesList items={filteredExpenses} />
        </Card>
  )
}

export default Expenses