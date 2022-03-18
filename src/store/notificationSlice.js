import { createSlice } from '@reduxjs/toolkit'

const initialState = { changed: false };

const notificationSlice = createSlice({
    name: 'notification',
    initialState,
    reducers: {
        updateNotification(state, action) {
            state = { ...action.payload, changed: true };
            return state
        },
        resetNotification(state) {
            state = { ...initialState };
            return state
        }
    },
})

export const { updateNotification, resetNotification } = notificationSlice.actions;

export const currentNotification = (state) => state.notification;

export default notificationSlice.reducer