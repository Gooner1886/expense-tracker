import React, { useState } from "react";

import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm/ExpenseForm";

const NewExpense = (props) => {
  const [show, setShow] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    }
    props.onAddExpense(expenseData);
    setShow(false);
  }

  const invertShowHandler = () => {
    setShow(true);
  }

  const cancelHandler = () => {
    setShow(false);
  }

  return (
    <div className="new-expense">
      {!show && <button onClick = {invertShowHandler}>Add New Expense</button>}
      {show && <ExpenseForm onSaveExpenseData = {saveExpenseDataHandler} onCancelHandler = {cancelHandler}/>}
    </div>
  );
};

export default NewExpense;
