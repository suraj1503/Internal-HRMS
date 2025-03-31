import {createSlice} from '@reduxjs/toolkit'



const initialState={
    user:null,
    isAdmin:false,
    isAuthenticated:false,
    isLoading:true
}

export const authSlice = createSlice({
    name:'auth',
    initialState,
    reducers:{
        userExists:(state,action)=>{
            state.user=action.payload.user;
            state.isAuthenticated=true,
            state.isAdmin=action.payload.isAdmin;
            state.isLoading=false
        },
        userNotExists:(state,action)=>{
            state.user=null;
            state.isAuthenticated=false,
            state.isAdmin=false;
            state.isLoading=true
        }
    }
})

export const {userExists,userNotExists} = authSlice.actions
export default authSlice.reducer
