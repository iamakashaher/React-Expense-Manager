import React, { useState } from "react";
import "./NewExpense.css";
import ExpsenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const [isEditing, setIsEdititng] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    props.onAddExpense(enteredExpenseData);
  };

  const startEditingHandler = () => {
    setIsEdititng(true);
  };

  const cancelForm = () => {
    setIsEdititng(false);
  };

  return (
    <div className="new-expense">
      {!isEditing && (
        <button type="submit" onClick={startEditingHandler}>
          Add Expense
        </button>
      )}
      {isEditing && (
        <ExpsenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={cancelForm}
        />
      )}
    </div>
  );
};

export default NewExpense;
