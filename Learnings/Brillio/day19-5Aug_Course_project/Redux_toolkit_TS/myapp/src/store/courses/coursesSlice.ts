import { CourseType } from './../../types/types';
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
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
const initialState = {
  courses: [],
  courseFound: {},
  loading: "idle",
};
// } as CourseState;

const courseSlice = createSlice({
  name: "course",
  initialState,
  reducers: {
  },
  extraReducers: (builder: any) => {
    builder
      .addCase(fetchCourses.fulfilled, (state: any, action: any) => {
        state.courses = action.payload;
        state.loading = "succeeded";
      })
      .addCase(fetchCourse.fulfilled, (state: any, action: any) => {
        state.courseFound = action.payload;
        console.log(state.courseFound);
      })
        .addCase(deleteCourseThunk.fulfilled,(state:any,action:any)=>{
            state.courses = action.payload;
            console.log('case delete builder called');
        })
        .addCase(editCourseThunk.fulfilled,(state:any,action:any)=>{
            console.log('edit thunk called');
            state.courses = action.payload;

        })
        .addCase(addCourseThunk.fulfilled,(state:any,action:any)=>{
            console.log('add thunk called');
            console.log(action.payload);
            state.courses.push(action.payload);
            alert('cousrse Added successfully');
        })
        .addCase(addCourseThunk.rejected,(state:any,action:any)=>{
            alert('cousrse Adding unsuccessful as object already exists');
        })
  },
});

// named exports

// export const { addToCourse } = courseSlice.actions;
export const selectCourses = (state: any) => state.courses.courses;
export const selectCourse = (state: any) => state.courses.courseFound;
export const selectLoading = (state: any) => state.courses.loading;

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
