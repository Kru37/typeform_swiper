import { createSlice } from "@reduxjs/toolkit";


const formSlice = createSlice({
    name:'form',
    initialState:{
        completed:0,
        formData: {
            firstName:'',
            lastName:''
        },
        showList:false
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
        },
        toggleList: (state) => {
            state.showList = !state.showList
        },
        changeListstatus: (state , action) => {
            state.showList = action.payload
        }

    }
})

export const formAction = formSlice.actions;

export default formSlice