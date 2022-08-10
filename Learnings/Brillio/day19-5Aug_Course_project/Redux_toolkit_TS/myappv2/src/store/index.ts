
import {configureStore} from '@reduxjs/toolkit';
import courseReducer from './courses/coursesSlice';

export const store = configureStore({
    reducer: {
        courses: courseReducer
    }
});
