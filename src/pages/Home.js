import React, {useState} from 'react';
import Expenses from '../component/expenses/Expenses';
import NewExpenses from '../component/newExpenses/NewExpenses';


const initialExpenses = [
    {
      id : 1,
      title : 'Pizza',
      amount : 340,
      date : new Date(2020, 2, 4)
    },
    {
      id : 2,
      title : 'Pizza',
      amount : 700,
      date : new Date(2020, 4, 4)
    },
    {
      id : 3,
      title : 'Pizza',
      amount : 200,
      date : new Date(2020, 7, 4)
    },
    {
      id : 4,
      title : 'Burger',
      amount : 500,
      date : new Date(2022, 5, 8)
    },
    {
      id : 5,
      title : 'Biryani',
      amount : 800,
      date : new Date(2023, 2, 19)
    }
  ]

const Home = () => {
    const [newExpense, setNewExpense] = useState(initialExpenses);
    const addExpenseHandler = (expense) => {
        setNewExpense((prevExpenses) => {
            return [...prevExpenses, expense]
        })
  }
  return (
    <div className="container">
        <NewExpenses onAddExpenses={addExpenseHandler} />
        <Expenses expenses={newExpense} />
    </div>
  );
}

export default Home