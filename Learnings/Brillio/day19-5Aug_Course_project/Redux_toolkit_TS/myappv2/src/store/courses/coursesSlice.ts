import {createAsyncThunk,createSlice} from "@reduxjs/toolkit";
import {getCourses,getCourse,editCourse,deleteCourse,addCourse} from '../../services'


const initialState  = {
    courses:[],
    courseFound:{},
    loading:'idle'
} 

const courseSlice = createSlice ({
    name:"course",
    initialState , 
    reducers:{
        addToCourse: (state, action)=>{
            addCourse(action.payload)
            .then(res=>alert('Course Added Successfully'))
            .catch(err=>alert(err.message));
        },
        editInCourse: (state,action)=>{ 
            console.log('executed');
            console.log(action.payload);
            editCourse(action.payload.id,action.payload.course)
            .then(res=>console.log('successfully update course'))
            .catch(err=>console.log (err.message));
        },
        deleteInCourse :(state,action) =>{

            console.log("delete course executed");
            // console.log(action.payload);
           deleteCourse(action.payload.id)
            .then((res)=>{
                console.log(res);
                state.courses = res.data;
                
            // alert(`course delete with data : ${JSON.stringify(res.data)}`);
            // console.log("course deleted details");
            // console.log(res.data);
        })
            .catch((err)=>console.log(err.message));
        }
    },
    extraReducers:(builder:any)=>{
        builder.addCase(fetchCourses.fulfilled, (state: any, action: any) => {
            state.courses = action.payload
            state.loading = 'succeeded'
          });
        builder.addCase(fetchCourse.fulfilled, (state: any, action: any) => {
            state.courseFound = action.payload;
            console.log(state.courseFound);
          });
    },
});

// named exports 

export const {addToCourse,editInCourse,deleteInCourse} = courseSlice.actions;
export const selectCourses = (state:any)  => state.courses.courses;
export const selectCourse  = (state:any)  => state.courses.courseFound;
export const selectLoading = (state:any) => state.courses.loading;

export const fetchCourses = createAsyncThunk(
    'course/fetchCourses',
    async() => {
      const res = await getCourses();
      return res.data;
    }
)
export const fetchCourse = createAsyncThunk(
    'course/fetchCourse',
    async(id:string)=>{
        const res  = await getCourse(id);
        return res.data; 
    }
)
//default export 
export default courseSlice.reducer;
