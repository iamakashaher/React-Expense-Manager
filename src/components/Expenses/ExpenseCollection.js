import Cards from "../UI/Cards";
import "./ExpenseCollection.css";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseList from "./ExpenseList";
import { useState } from "react";
import ExpensesChart from "./ExpensesChart";

const ExpenseCollection = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredItems = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });


  return (
    <div>
      <li>
      <Cards className="expenses">
        <ExpenseFilter onChangeFilter={filterChangeHandler} />
        <ExpensesChart expenses={filteredItems} />
        <ExpenseList filteredItems={filteredItems} />
      </Cards>
      </li>
    </div>
  );
};

export default ExpenseCollection;
