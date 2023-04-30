import { useState } from "react";
import Expenses from "./components/Expenses";

function App() {
  const [show, setShow] = useState(false)
  const [count, setCount] = useState(0)
  var myOtherCount = 0
  const expenses = [
    {title: "AmEx Statement", amount: 100.23, date: new Date(2023,1,1)},
    {title: "Chase Card Statement", amount: 400.23, date: new Date(2023,1,1)},
    {title: "Apartment Statement", amount: 900.23, date: new Date(2023,0,30)},
    {title: "Bank Statement", amount: 1000.23, date: new Date(2023,0,21)}
  ];

  return (
    <div>
      <h2>Let's get started!</h2>
      <p>Learning React. New change to it. Another change</p>
      <button onClick={() => setCount(count + 1)}>increment</button>
      <span>{count}</span>

      <br />
      <button onClick={() => {myOtherCount+= 1; console.log(myOtherCount)}}>increment my other count</button>
      <span>{myOtherCount}</span>
      <br />
      <button onClick={() => setShow(!show)}>Show expenses</button>
      {show && <Expenses count={count} expenses={expenses}/>}
    </div>
  );
}

export default App;
