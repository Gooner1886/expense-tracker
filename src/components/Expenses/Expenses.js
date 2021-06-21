import React, { useState } from "react";

import "./Expenses.css";

import Card from "../UI/Card/Card";

import ExpensesFilter from "./ExpensesFilter/ExpensesFilter";
import ExpensesList from "./ExpensesList/ExpensesList";
import ExpensesChart from "./ExpensesChart/ExpensesChart";

const Expenses = (props) => {
  const [currentYear, setCurrentYear] = useState("2021");

  const updateSelectedYearHandler = (selectedYear) => {
    setCurrentYear(selectedYear);
    console.log(selectedYear);
  };

  const yearWiseExpenses = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === currentYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={currentYear}
          onChangeYear={updateSelectedYearHandler}
        />
        <ExpensesChart expenses={yearWiseExpenses}/>
        <ExpensesList expenses={yearWiseExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;
