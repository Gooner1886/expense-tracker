import React, { useEffect, useState, useCallback } from "react";

import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
  const [expenses, setExpenses] = useState([]);

  const fetchExpenseHandler = useCallback(async () => {
    try {
      const response = await fetch(
        "https://react-http-aeae1-default-rtdb.firebaseio.com/expenses.json"
      );

      const data = await response.json();
      

      const loadedExpenses = [];
      for (const key in data) {
        loadedExpenses.push({
          id: data[key].id,
          amount: data[key].amount,
          date: new Date(data[key].date),
          title: data[key].title,
        });
      }

      setExpenses(loadedExpenses);
    } catch (err) {
      console.log(err);
    }
  }, []);

  useEffect(() => {
    fetchExpenseHandler();
  }, [fetchExpenseHandler]);

  const addExpenseHandler = async (expense) => {
    const response = await fetch(
      "https://react-http-aeae1-default-rtdb.firebaseio.com/expenses.json",
      {
        method: "POST",
        body: JSON.stringify(expense),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const data = await response.json();
    fetchExpenseHandler();
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
}

/* return React.createElement(
  "div",
  {},
  React.createElement("h2", {}, "Let's get started!"),
  React.createElement(Expenses, {expenses: expenses})
);
} */
export default App;
