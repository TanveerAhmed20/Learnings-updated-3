import { CourseType } from './../../types/types';
import { ActionReducerMapBuilder, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import { ActionReducerMapBuilder } from '@reduxjs/toolkit';
import {
  getCourses,
  getCourse,
  editCourse,
  deleteCourse,
  addCourse,
} from "../../services";
// import {CourseType} from '../../types/types'
// interface CourseState {
//     loading: 'idle' | 'pending' | 'succeeded' | 'failed'
// }
import {RootState} from '../index'
interface IState {
 courses: CourseType[];
 courseFound: CourseType;
 loading: string;
}
const initialState = {
  courses: [],
  courseFound: {},
  loading: "idle",
} as IState;

const courseSlice = createSlice({
  name: "courses",
  initialState,
  reducers: {
  },
  extraReducers: (builder:ActionReducerMapBuilder<IState>) => {
    builder
      .addCase(fetchCourses.fulfilled, (state, action) => {
        state.courses = action.payload;
        state.loading = "succeeded";
      })
      .addCase(fetchCourse.fulfilled, (state, action) => {
        state.courseFound = action.payload;
        console.log(state.courseFound);
      })
        .addCase(deleteCourseThunk.fulfilled,(state,action)=>{
            state.courses = action.payload;
            console.log('case delete builder called');
        })
        .addCase(editCourseThunk.fulfilled,(state,action)=>{
            console.log('edit thunk called');
            state.courses = action.payload;

        })
        .addCase(addCourseThunk.fulfilled,(state,action)=>{
            console.log('add thunk called');
            console.log(action.payload);
            state.courses.push(action.payload);
            alert('cousrse Added successfully');
        })
        .addCase(addCourseThunk.rejected,(state,action)=>{
            alert('cousrse Adding unsuccessful as object already exists');
        })
  },
});

// named exports

// export const { addToCourse } = courseSlice.actions;
export const selectCourses = (state:RootState) =>state.courses.courses;

export const selectCourse = (state: RootState) => state.courses.courseFound;
export const selectLoading = (state: RootState) => state.courses.loading;

export const fetchCourses = createAsyncThunk(
  "course/fetchCourses",
  async () => {
    const res = await getCourses();
    return res.data;
  }
);
export const fetchCourse = createAsyncThunk(
  "course/fetchCourse",
  async (id: string) => {
    const res = await getCourse(id);
    return res.data;
  }
);

export const editCourseThunk = createAsyncThunk(
    'course/editCourseThunk',
    async(course:CourseType)=>{
        const res = await editCourse(course); 
        return res.data ; 
    }
)
export const deleteCourseThunk = createAsyncThunk(
    'course/deleteCourseThunk',
    async(id:string)=>{
        const res = await deleteCourse(id)
        return res.data;
    }
)

export const addCourseThunk = createAsyncThunk(
    'course/addCourseThunk',
   async (course:CourseType,{rejectWithValue})=>{
        try{
            const res = await addCourse(course)
            return res.data;
        }
        catch(err:any){
            return rejectWithValue('');
        }
    }
)
//default export
export default courseSlice.reducer;
