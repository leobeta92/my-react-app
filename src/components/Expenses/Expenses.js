import React, { useState } from 'react';
import './Expenses.css';
import Card from '../UI/Card';
import FilterExpenses from './FilterExpenses';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

function Expenses(props) {
   
    const [filteredYear, setFilteredYear] = useState('2020');

    
    function filterChangeHandler(selectedYear) {
        setFilteredYear(selectedYear);

    }

    let filteredExpenses = props.expenses.filter((expense) => {return expense.date.getFullYear().toString() === filteredYear});
    // console.log(filteredExpenses);

    // let contentShown = <p className='no-transactions'>No Transactions in This Time Period.</p>

    // let displayContent = filteredExpenses.length > 0 ? contentShown = filteredExpenses.map(expense => <ExpenseItem title={expense.title} amount={expense.amount} date={expense.date} />) : contentShown;

    return (
        <div>
        <Card className="expenses">
            <FilterExpenses selected={filteredYear} onFilterChange={filterChangeHandler}/>
            <ExpensesChart expenses={filteredExpenses}/>
            <ExpensesList items={filteredExpenses}/>
        </Card>
        </div>
    );
}

export default Expenses;