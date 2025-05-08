import { RootState } from "@/redux/store";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type TSurveyData = {
  readerName: string;
  email: string;
  relation: "Parent" | "Child" | "Other";
  gender: "Male" | "Female" | "Other";
  dateOfBirth: string;
  favoriteCollection: string;
  interestInArabic: boolean;
  lavelInArabic: "Beginner" | "Intermediate" | "Advance";
  costSpend: {
    statement: string;
  };
};

const initialState: TSurveyData = {
  readerName: "",
  email: "",
  relation: "Parent",
  gender: "Male",
  dateOfBirth: "",
  favoriteCollection: "",
  interestInArabic: false,
  lavelInArabic: "Beginner",
  costSpend: {
    statement: "",
  },
};

const surveySlice = createSlice({
  name: "survey",
  initialState,
  reducers: {
    updateSurveyData: (state, action: PayloadAction<Partial<TSurveyData>>) => {
      return { ...state, ...action.payload };
    },
    resetSurveyData: () => initialState,

  },
});

export const { updateSurveyData, resetSurveyData } = surveySlice.actions;
export default surveySlice.reducer;
export const selectCurrentSurvey = (state: RootState): TSurveyData => state.survey;