import { createSlice } from "@reduxjs/toolkit";


const formSlice = createSlice({
    name:'form',
    initialState:{
        completed:0,
        formData: {
            firstName:'',
            lastName:''
        }
    },
    reducers:{
        addData:(state , action) => {
            state.formData = {
                ...state.formData,
                [action.payload.name] : action.payload.value
            }
        },
        setProgress: (state) => {
           let dummy = 0;
           for(let key in state.formData){
             if(state.formData[key]){
                dummy += 1
             }
           }
           state.completed = Math.floor((dummy/6)*100)
        }

    }
})

export const formAction = formSlice.actions;

export default formSlice