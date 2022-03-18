import { createSlice } from '@reduxjs/toolkit'

const initialState = [
    {
        id: 0,
        title: "Toilet Paper",
        amount: 94.12,
        date: new Date(2020, 7, 14).toDateString(),
    },
    { id: 1, title: "New TV", amount: 799.49, date: new Date(2021, 2, 12).toDateString() },
    {
        id: 2,
        title: "Car Insurance",
        amount: 294.67,
        date: new Date(2021, 2, 28).toDateString(),
    },
    {
        id: 3,
        title: "New Desk (Wooden)",
        amount: 450,
        date: new Date(2021, 5, 12).toDateString(),
    },
];

const listItemsSlicer = createSlice({
    name: 'listItems',
    initialState,
    reducers: {
        addItem(state, action) {
            const expenseData = {...action.payload, id: state.length}
            state = [...state, expenseData];
            return state;
        },
        updateItem(state, action) {
            state[action.payload.id] = action.payload
            return state
        }
    },
})

export const { addItem, updateItem } = listItemsSlicer.actions;

export default listItemsSlicer.reducer