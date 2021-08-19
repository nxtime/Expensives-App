import React, { useState } from "react";
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title);

  const clickHandler = () => {
    setTitle("Updated");
  };
  return (
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{title}</h2>
          <div className="expense-item__price">
            <p>${props.amount}</p>
          </div>
        </div>
        <button className="extense-item__change-title" onClick={clickHandler}>
          <p>Change title</p>
        </button>
      </Card>
  );
};
export default ExpenseItem;
