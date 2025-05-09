import { RootState } from "@/redux/store";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Price {
    amount: number;
  }
  
  interface TPlan {
    name: string;
    price: Price;
    type: string;
    features: string[];
    _id?:string
  }
  

  const initialState: TPlan = {
    name: "",           
    price: { amount: 0 }, 
    type: "",           
    features: [],       
  };
const planSlice = createSlice({
  name: "plan",
  initialState,
  reducers: {

      subscriptionPlan:(state,action: PayloadAction<Partial<TPlan>>)=>{
        return {...state,...action.payload}
      },
    resetPlanData: () => initialState,
  },
});

export const { subscriptionPlan, resetPlanData } = planSlice.actions;
export default planSlice.reducer;
export const selectCurrentPlan = (state: RootState): TPlan => state.plan;