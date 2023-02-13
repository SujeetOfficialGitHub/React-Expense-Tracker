import './App.css';
import Expenses from './component/expenses/Expenses';
import NewExpenses from './component/newExpenses/NewExpenses';

const expensesList = [
  {
    id : 1,
    title : 'Pizza',
    amount : 200,
    date : new Date(2020, 2, 4)
  },
  {
    id : 2,
    title : 'Burger',
    amount : 500,
    date : new Date(2022, 5, 4)
  },
  {
    id : 3,
    title : 'Biryani',
    amount : 800,
    date : new Date(2023, 2, 4)
  }
]

function App() {
  return (
    <div className="container">
        <NewExpenses />
        <Expenses expenses={expensesList} />
    </div>
  );
}

export default App;
