import Expenses from './component/expenses/Expenses';
import NewExpense from './component/newExpense/NewExpense';
import './App.css';
import { useState } from 'react';

const initial_expenses = [
  {
    id : 1,
    date : new Date(2023,4,5),
    title : "Car Insurence",
    amount : 200
  },
  {
    id : 2,
    date : new Date(2022,4,5),
    title : "Petrol",
    amount : 400
  },
  {
    id : 3,
    date : new Date(2023,4,5),
    title : "Pizza",
    amount : 300
  },
  {
    id : 4,
    date : new Date(2023,4,5),
    title : "Car Insurence",
    amount : 200
  },
  {
    id : 5,
    date : new Date(2022,4,5),
    title : "Car Insurence",
    amount : 200
  },
  {
    id : 6,
    date : new Date(2021,4,5),
    title : "Electricity Bill",
    amount : 340
  }
]

function App() {
  const [newExpense, setNewExpense] = useState(initial_expenses)
  const addExpenseHandler = (expense) => {
    setNewExpense((prevExpenses) => {
      return [...prevExpenses, expense]
    })
  }

  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expensesList={newExpense}/>
    </div>
  );
}

export default App;
