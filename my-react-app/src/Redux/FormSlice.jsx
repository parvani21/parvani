import {createSlice} from "@reduxjs/toolkit"
const initialState = {
    name:"",
    email:"",
    password:""
}
const formSlice = createSlice({
    name: "form",
    initialState, 
    reducers: {
        updateFill: (state, action) => {
            const {field, value} = action.payload
            state [field] = value
        }, 
        resetForm: () => initialState,
    }
})

export const {updateFill, resetForm} = formSlice.actions
export default formSlice.reducer
