import React from "react";
import "./ExpenseList.css";
import ExpenseItem from "./ExpenseItem";

const ExpenseList = (props) => {
  let expenseContent = <p>No Expenses Found</p>;

  if (props.filteredItems.length === 0) {
      return <h2 className="expenses-list__fallback">No Expenses Found</h2>
  }

  expenseContent = props.filteredItems.map((expense, index) => (
    <ExpenseItem
      key={index}
      title={expense.title}
      amount={expense.amount}
      date={expense.date}
    />
  ));

  return <ul className="expenses-list">{expenseContent}</ul>;
};

export default ExpenseList;
