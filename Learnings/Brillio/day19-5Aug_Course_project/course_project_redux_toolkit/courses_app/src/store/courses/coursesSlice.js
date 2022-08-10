import {createSlice} from '@reduxjs/toolkit';
 

const initialState = {
    courses:[]
}

const coursesSlice = createSlice({
name:"courses",
initialState, 
reducers :{
    setCourses: (state,action)=>{
        state.cour
    },
    addCourse : (state,action)=>{
         state.courses.push(action.payload);
    }
    ,
    editCourse:(state,action)=>{


    },
    deleteCourses : (state,action)=>{
        
    }
    ,
    getCourse:(state,action)=>{
        const id = action.payload.id;
        const course = state.courses.findIndex(e=>e.courseId === id);
        return course;
    }
}
});


export const {addCourses, editCourses,deleteCourses,getCourse,setCourses}  = coursesSlice.actions;

export const selectAllCourses  = (state)=> state.Coursess.Coursess;

export default coursesSlice.reducer;



