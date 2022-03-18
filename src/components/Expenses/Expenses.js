import React, { useState } from "react";
import ExpensesList from "./ExpensesList";
import "./Expenses.css";
import ExpenseFilter from "./ExpenseFilter";
import Card from "../UI/Card";
import {useSelector} from 'react-redux'
import ExpensesChart from "./ExpensesChart";

const Expenses = () => {
  const [selectedFilter, setSelectedFilter] = useState("2020");
  const props = useSelector(state => state.listItems)

  const showSelectedFilter = (filter) => {
    setSelectedFilter(filter);
  };
  const selectedYear = props.filter((expense) => {
    return new Date(expense.date).getFullYear().toString() === selectedFilter;
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
