import React, { useState } from "react";
import ExpensesList from "./ExpensesList";
import "./Expenses.css";
import ExpenseFilter from "./ExpenseFilter";
import Card from "../UI/Card";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  const [selectedFilter, setSelectedFilter] = useState("2020");

  const showSelectedFilter = (filter) => {
    setSelectedFilter(filter);
  };
  const selectedYear = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === selectedFilter;
  });

  return (
    <>
      <ExpenseFilter
        selected={selectedFilter}
        onSelectedFilter={showSelectedFilter}
      />
      <ExpensesChart expenses={selectedYear}/>
      <Card>
        <ExpensesList items={selectedYear} />
      </Card>
    </>
  );
};
export default Expenses;
