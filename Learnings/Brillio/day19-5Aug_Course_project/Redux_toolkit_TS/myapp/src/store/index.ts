
import {configureStore} from '@reduxjs/toolkit';
import courseReducer from './courses/coursesSlice';

export const store = configureStore({
    reducer: {
        courses: courseReducer
    }
});


export type RootState = ReturnType<typeof store.getState>