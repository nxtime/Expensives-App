import { Icon } from '@iconify/react'
import './Notification.css'
import { useDispatch, useSelector } from 'react-redux';
import { resetNotification } from '../../store/notificationSlice'
import { updateItem } from '../../store/listItemsSlice'
import { useState, useRef } from 'react';

function Notification() {
    const props = useSelector(state => state.notification)

    const [inputValue, setInputValue] = useState({
        title: props.title,
        amount: props.amount,
    });
    const inputTitleRef = useRef()
    const inputAmountRef = useRef()

    const dispatch = useDispatch();

    const clickHandler = () => {
        dispatch(resetNotification())
    }
    const submitHandler = () => {
        dispatch(updateItem({ ...props, ...inputValue }));
        dispatch(resetNotification())
    }

    const handleInput = () => {
        setInputValue({
            title: inputTitleRef.current.value,
            amount: inputAmountRef.current.value
        });
    }

    return (
        <div className="notification__container">
            <div className="backdrop" onClick={clickHandler}></div>
            <div className="notification__card">
                <Icon className="notification__close" icon="ep:circle-close-filled" onClick={clickHandler} />
                <h2>Mudar o Título</h2>
                <input className="notification__input" type="" value={inputValue.title} ref={inputTitleRef} onChange={handleInput} />
                <br />

                <h2>Mudar o Valor</h2>
                <input className="notification__input" type="" value={inputValue.amount} ref={inputAmountRef} onChange={handleInput} />
                <div className="button" onClick={submitHandler}>
                    <p>Salvar</p>
                </div>
            </div>
        </div>
    );
}

export default Notification;