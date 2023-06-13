import React from "react";
import './ExpensesList.css';
import ExpenseItem from "./ExpenseItem.js";

function ExpensesList(props) {

    if (props.items.length === 0) {
        return <h2 className="expenses-list__fallback">No Transactions in This Time Period.</h2>
    }

    return (<ul className="expenses-list">
        {props.items.map(expense => 
            <ExpenseItem 
                title={expense.title} 
                amount={expense.amount} 
                date={expense.date} />)}
    </ul>);
}

export default ExpensesList;