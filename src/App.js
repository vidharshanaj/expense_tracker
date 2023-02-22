import { useState } from 'react';
import './App.css';
import Expenses from './component/Expenses/Expenses.jsx';
import NewExpense from './component/Expenses/new_expense/NewExpense';



  const DUMMY_DATA = [
    {
      id: 'e1',
      title: 'Fruits',
      amount: 500,
      date: new Date(2021, 7, 14),
    },
    { id: 'e2', 
      title: 'Vegetables', 
      amount: 1000, 
      date: new Date(2020, 2, 12) 
    },
    {
      id: 'e3',
      title: 'Dresses',
      amount: 3750,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'Groceries',
      amount: 670,
      date: new Date(2021, 5, 12),
    },
  ];

  function App(){
    const[expenses,setExpenses] = useState(DUMMY_DATA)
    const onAddExpense =(newValue)=>{
      setExpenses((prev) => [newValue,...prev])
    }
  return (
    // <div className="App">
    //   <ExpenseItem
    //   title ={"expense request"} 
    //   amount ={100}
    //   date={new Date(2023,3,14)}/>
      
    //   <ExpenseItem
    //   title ={"food requent"} 
    //   amount ={100}
    //   date={new Date(2023,3,14)}/>
      
    // </div>
//Here we use array using index
  <div className="App">
    <NewExpense onAddExpense={onAddExpense} />
    <Expenses expenses={expenses} />
  </div>
  );
  }



export default App;
