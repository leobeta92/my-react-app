import React, { useState }  from 'react'; 
import './ExpenseForm.css';

function ExpenseForm(props) {
    // Setting state
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    // Functions for grabbing form inputs and changing their state
    function titleChangeHandler(event) {
        setEnteredTitle(event.target.value);
        
        // Not a good format because an outdated state may get called
        // setUserInput({
        //     ...userInput,
        //     enteredTitle: event.target.value});

        // When a target value relies on a previous state, use this syntax.
        // setUserInput((prevState) => {
        //     return {...prevState,enteredTitle: event.target.value}
        // });
    }
    function amountChangeHandler(event) {
        setEnteredAmount(event.target.value);

    }
    function dateChangeHandler(event) {
        setEnteredDate(event.target.value);

    }

    // Handling expense form submission.
    function submitHandler(e) {
        e.preventDefault();
        console.log("Form Submitted");

        // Creating expense data object from form inputs.
        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        };

        // Passing values up/over
        props.onSaveExpenseData(expenseData);
        // props.done = true;
        // console.log("Entered Form",props.done);

        // Resetting state
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');

        // Hiding Form Again
        props.onHideExpenseForm();
    }

    return (
    <form onSubmit={submitHandler}>
        <div className='new-expense__controls'>
            <div className='new-expense__control'>
                <label>Title</label>
                <input type='text' value={enteredTitle} onChange={titleChangeHandler} />
            </div>
            <div className='new-expense__control'>
                <label>Amount</label>
                <input type='number' min="0.01" step="0.01" value={enteredAmount} onChange={amountChangeHandler} />
            </div>
            <div className='new-expense__control'>
                <label>Date</label>
                <input type='date' value={enteredDate} onChange={dateChangeHandler} />
            </div>
        </div>
        <div className='new-expense__actions'>
            <button type="submit">Add Expense</button>
        </div>
    </form> )
}

export default ExpenseForm;