import React, { useState } from "react";
import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses"; 

const INITIAL_EXPENSES = [    
    {title: "2020 AmEx Statement", amount: 100.23, date: new Date(2020,1,1)},
    {title: "2021 Chase Card Statement", amount: 400.23, date: new Date(2021,1,1)},
    {title: "2023 Apartment Statement", amount: 900.23, date: new Date(2023,0,30)},
    {title: "2023 May Bank Statement", amount: 1000.23, date: new Date(2023,0,21)},
    {title: "2022 June Bank Statement", amount: 1000.23, date: new Date(2022,0,21)},
    {title: "2021 September Bank Statement", amount: 1000.23, date: new Date(2021,0,21)},
    {title: "2020 October Bank Statement", amount: 1000.23, date: new Date(2020,0,21)}
  ];

function App() {

  const [expenses,setExpenses] = useState(INITIAL_EXPENSES);
  // const [newExpense,setNewExpense] = useState(<button>Add New Expense</button>)


  function addExpenseHandler(expense) {
    setExpenses((prevExpenses) => {
      return [expense,...prevExpenses];
    });
  };

  

  return (
    <div>
      {/* {newExpense} */}
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses expenses={expenses}/>
    </div>
  );
}

export default App;
