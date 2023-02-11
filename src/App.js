import './App.css';
import ExpenseItem from './component/ExpenseItem';
const expensesList = [
  {
    id : 1,
    date : new Date(2023,4,5),
    title : "Car Insurence",
    amount : 200
  },
  {
    id : 2,
    date : new Date(2023,4,5),
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
    date : new Date(2023,4,5),
    title : "Car Insurence",
    amount : 200
  },
  {
    id : 6,
    date : new Date(2023,4,5),
    title : "Electricity Bill",
    amount : 340
  }
]
function App() {
  return (
    <div className="App">
      {expensesList.map((expenseItem,i) => (
        <ExpenseItem key={i} expenseItem={expenseItem}/>
      ))}
    </div>
  );
}

export default App;
