import React, { useState, useEffect } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import Notification from "./components/UI/Notification";
import { currentNotification, updateNotification, resetNotification } from "./store/notificationSlice";
import { useDispatch, useSelector } from "react-redux";
import './index.css'

const App = () => {
  const expenses = useSelector(state => state.listItems)

  const notificationData = useSelector(state => state.notification)
  const changed = useSelector(state => state.notification.changed)
  const [notification, setNotification] = useState(notificationData)

  const dispatch = useDispatch()

  useEffect(() => {
    if (changed) {
      dispatch(updateNotification({ ...notificationData, changed: false }))
    }
    setNotification(notificationData);

  }, [changed])

  return (
    <>
      {notification.title &&
        <Notification />
      }
      <NewExpense />
      <Expenses expenses={expenses} />
    </>
  );
};
export default App;
