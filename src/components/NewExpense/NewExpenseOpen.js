import React from "react";

function NewExpenseOpen(props) {
    function expenseFormHandler(e) {
        return props.onShowExpenseFormHandler();
    }
    return (<button onClick={expenseFormHandler}>New Expense (Test)</button>)
}

export default NewExpenseOpen;