import React from "react";

function NewExpenseOpen(props) {
    function expenseFormHandler(e) {
        console.log("Before:",props.onDone);
        // props.onDone = true;
        // props.done = true;
        return props.onShowExpenseFormHandler();
    }
    return (<button onClick={expenseFormHandler}>New Expense (Test)</button>)
}

export default NewExpenseOpen;