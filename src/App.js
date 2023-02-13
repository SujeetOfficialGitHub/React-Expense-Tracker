import './App.css';
import Expenses from './component/expenses/Expenses';
import NewExpenses from './component/newExpenses/NewExpenses';


function App() {
  return (
    <div className="container">
        <NewExpenses />
        <Expenses />
    </div>
  );
}

export default App;
