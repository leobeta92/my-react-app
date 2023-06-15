import React, { useState } from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';
import NewExpenseOpen from './NewExpenseOpen';

function NewExpense(props) {

    const [done,setDone] = useState(false);

    function addNewExpenseHandler(e) {
        console.log("passing down to expense open")
    }

    function saveExpenseDataHandler(enteredExpenseData) {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        console.log("Expense Data:",props.onAddExpense);
        props.onAddExpense(expenseData);
        setDone(false);
    }

    function showExpenseFormHandler(e) {
        setDone(true);
        
        // console.log("After:",done);
        return done;
    }

    function hideExpenseFormHandler(e) {
        setDone(false);

        // console.log("After submitting data:",done);
        return done;
    }


    let expenseFormShow = done ? <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onHideExpenseForm={hideExpenseFormHandler}/> :         <NewExpenseOpen onDone={done} onShowExpenseFormHandler={showExpenseFormHandler}/>


    return (<div className='new-expense'>
        {expenseFormShow}
    </div>)
}

export default NewExpense;