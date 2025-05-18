import { RootState } from "@/redux/store";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type TSurveyData = {
  isCompleted: boolean;
  
};

const initialState: TSurveyData = {
isCompleted: false,

};

const surveyCompleteSlice = createSlice({
  name: "surveyComplete",
  initialState,
  reducers: {
    setSurveyComplete: (state, action: PayloadAction<boolean>) => {
      state.isCompleted = action.payload;
    },
    resetSurveyComplete: () => initialState,
  },
});

export const { setSurveyComplete, resetSurveyComplete } = surveyCompleteSlice.actions;
export default surveyCompleteSlice.reducer;
export const IsSurveyComplete = (state: RootState): TSurveyData => state.IsSurveyComplete;
