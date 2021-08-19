import React from 'react';
import ExpenseItem from './ExpenseItem';
import "./ExpenseItem.css"

import "./ExpensesList.css";

const ExpensesList = props => {


    if (props.items.length === 0) {
        return <p className="center">No expenses found.</p>;
    } else {
    return <ul className="expenses-list">
    {
        props.items.map((expense) => (
            <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
            />
        ))
    }
    </ul>
    }
};

export default ExpensesList;