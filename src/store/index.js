import { configureStore } from '@reduxjs/toolkit'
import notificationSlicer from './notificationSlice';
import listItemsSlicer from './listItemsSlice';
import { getDefaultMiddleware } from '@reduxjs/toolkit';

const store = configureStore({
    reducer: {
        notification: notificationSlicer,
        listItems: listItemsSlicer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
})

export default store;