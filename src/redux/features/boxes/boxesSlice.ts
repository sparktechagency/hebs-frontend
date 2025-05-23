import { RootState } from "@/redux/store";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type TCategory = {
  categoryID: string;
};

const initialState: TCategory = {
  categoryID: ""
};

const boxesSlice = createSlice({
  name: "box",
  initialState,
  reducers: {
    // Update existing category or partial update
    updateSurveyData: (state, action: PayloadAction<Partial<TCategory>>) => {
      return { ...state, ...action.payload };
    },
    // Add category - set a new categoryID
    addCategory: (state, action: PayloadAction<string>) => {
      state.categoryID = action.payload;
    },
    // Reset category to initial state
    resetCategory: () => initialState,
  },
});

export const { updateSurveyData, addCategory, resetCategory } = boxesSlice.actions;
export default boxesSlice.reducer;
export const selectCurrentCategoryId = (state: RootState): TCategory => state.box;
