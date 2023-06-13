import React, { useState } from 'react';
import './Expenses.css';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import FilterExpenses from './FilterExpenses';
import ExpensesList from './ExpensesList';

function Expenses(props) {
    // console.log("Props:",props);
    // console.log("Props Expenses:",props.expenses);
    // console.log("Props Date:",props.expenses[0].date.getFullYear());
    // console.log("Props Expenses Items:",props.expenses.items);
    
   
    const [filteredYear, setFilteredYear] = useState('2020');

    
    function filterChangeHandler(selectedYear) {
        setFilteredYear(selectedYear);
        // for(expenses in props) {
        //     if(props.date )
        // }
    }

    let filteredExpenses = props.expenses.filter((expense) => {return expense.date.getFullYear().toString() === filteredYear});
    // console.log(filteredExpenses);

    // let contentShown = <p className='no-transactions'>No Transactions in This Time Period.</p>

    // let displayContent = filteredExpenses.length > 0 ? contentShown = filteredExpenses.map(expense => <ExpenseItem title={expense.title} amount={expense.amount} date={expense.date} />) : contentShown;

    return (
        <div>
        <Card className="expenses">
        <FilterExpenses selected={filteredYear} onFilterChange={filterChangeHandler}/>
            <ExpensesList items={filteredExpenses}/>
        </Card>
        </div>
    );
}

export default Expenses;