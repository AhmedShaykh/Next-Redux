import { configureStore } from '@reduxjs/toolkit';
import CounterSlice from './slice/CounterSlice';

export const store = configureStore({
    reducer: {
        CounterSlice
    }
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;