import './App.css';
import ExpenseForm from './component/ExpenseForm';
import Expenses from './component/expenses/Expenses';

function App() {
  return (
    <div className="App">
      <ExpenseForm />
      <Expenses />
    </div>
  );
}

export default App;
