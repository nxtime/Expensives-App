import React, { useState } from "react";
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import { Icon } from '@iconify/react';
import "./ExpenseItem.css";
import { useDispatch, useSelector } from 'react-redux';
import { updateNotification } from '../../store/notificationSlice'


const ExpenseItem = ({ id }) => {

  const props = useSelector(state => state.listItems[id])

  const dispatch = useDispatch();

  const notificationHandler = () => {
    dispatch(updateNotification(props))
  }

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">
          <p>R${props.amount.toString().replace('.', ',')}</p>
        </div>
      </div>
      <button className="extense-item__change-title" onClick={notificationHandler}>
        <p ><Icon icon="fa6-solid:pencil" /></p>
      </button>
    </Card>
  );
};
export default ExpenseItem;
