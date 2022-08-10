import {configureStore} from '@reduxjs/toolkit';
import coursesReducer from './courses/coursesSlice';

export const store = configureStore({
    reducer: {
        courses: coursesReducer,
    }
});
