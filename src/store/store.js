import { configureStore } from "@reduxjs/toolkit";
import formSlice from "./formSlice";


const store = configureStore({
    reducer: {
        typeform: formSlice.reducer
    }
})

export default store;