import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE ={
    count : 0,
    title:[],
}

export const cartSlice = createSlice({
  name: "cart",
  initialState: INITIAL_STATE,
  reducers: {
    increment:(state)=>{
        state.count+=1;
    },
    details:(state,action)=>{
      state.title.push(action.payload);
    },
  },
});


export const { increment,details } = cartSlice.actions;


export default cartSlice.reducer;