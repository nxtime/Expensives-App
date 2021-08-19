import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [userInput, setUserInput] = useState({
    enteredTitle: '',
    enteredAmount: '',
    enteredDate: '',
  });
  const [isFormClosed, setIsFormClosed] = useState(true);

  const titleChangeHandler = (event) => {
    setUserInput((prevState) => {
      return { ...prevState, enteredTitle: event.target.value };
    });
  };
  const amountChangeHandler = (event) => {
    setUserInput((prevState) => {
      return { ...prevState, enteredAmount: event.target.value };
    });
  };
  const dateChangeHandler = (event) => {
    setUserInput((prevState) => {
      return { ...prevState, enteredDate: event.target.value };
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: userInput.enteredTitle,
      amount: +userInput.enteredAmount,
      date: new Date(userInput.enteredDate),
    };
    setUserInput.enteredTitle = '';
    setUserInput.enteredAmount = '';
    setUserInput.enteredDate = '';
    props.onSaveExpenseData(expenseData);
    setIsFormClosed(!isFormClosed);
  };
  const formHandler = (event) => {
    setIsFormClosed(!isFormClosed);
  }
  if (isFormClosed) {
    return (
    <>
      <div>
        <div className="new_expense__actions">
          <button type="button" onClick={formHandler}>
            <p>Add New Expense</p>
          </button>
        </div>
      </div>
    </>
    );
  } else {
    return (
      <>
        <form onSubmit={submitHandler}>
          <div className="new-expense__controls">
            <div className="new-expense__control">
              <label>Title</label>
              <input
                type="text"
                onChange={titleChangeHandler}
              />
            </div>
            <div className="new-expense__control" >
              <label>Amount</label>
              <input
                type="number"
                min="0.01"
                step="0.01"
                onChange={amountChangeHandler}
              /> 
            </div>
            <div className="new-expense__control">
              <label>Date</label>
              <input
                type="date"
                min="2019-01-01"
                max="2022-12-31"
                onChange={dateChangeHandler}
              />
            </div>
          </div>
          <div className="new_expense__actions">
            <button type="button" onClick={formHandler}>
              <p>Cancel</p>
            </button>
            <button type="submit">
              <p>Add Expense</p>
            </button>
          </div>
        </form>
      </>
    );
  }
};

export default ExpenseForm;
