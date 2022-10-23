import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE ={
    count : 0,
}

export const cartSlice = createSlice({
  name: "cart",
  initialState: INITIAL_STATE,
  reducers: {
    increment:(state)=>{
        state.count+=1;
    }
  },
});


export const { increment } = cartSlice.actions;


export default cartSlice.reducer;