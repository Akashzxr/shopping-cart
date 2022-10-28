import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE ={
    count : 0,
    title:[],
    quantity:[],
}

export const cartSlice = createSlice({
  name: "cart",
  initialState: INITIAL_STATE,
  reducers: {
    increment:(state)=>{
        state.count+=1;
    },

    details:(state,action)=>{
     const length=state.title.length;
     let isitem = true;
     let id = action.payload.info.id;
           for(let i=0;i<length;i++){
               if(state.title[i].info.id===id){
                 isitem = false;
                 state.title[i].info.quantity+=1;
               }
             }

       if(isitem==true){
          state.title.push(action.payload);
          console.log(action.payload)
          state.count+=1;
       }
       console.log(state.title[0].info.quantity);
    },
  },
});


export const { increment,details } = cartSlice.actions;


export default cartSlice.reducer;