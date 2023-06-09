import { createSlice } from "@reduxjs/toolkit";


const formSlice = createSlice({
    name:'form',
    initialState:{
        completed:0,
        formData: {
            firstName:'',
            lastName:'',
            industry:'',
            role:[],
            goal:[],
            email:''
        },
        showList:false
    },
    reducers:{
        addData:(state , action) => {
            //console.log(state.formData)
            state.formData = {
                ...state.formData,
                [action.payload.name] : action.payload.value
            }
        },
        setProgress: (state) => {
           let dummy = 0;
           for(let key in state.formData){
             if(state.formData[key]){
                if(key === 'role' || key === 'goal'){
                   if(state.formData[key].length !== 0){
                    dummy += 1
                   }
                }else{
                    dummy += 1
                }
               
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