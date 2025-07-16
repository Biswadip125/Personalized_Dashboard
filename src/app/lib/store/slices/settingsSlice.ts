import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type SettingsState = {
  selectedNewsCategories: string[];
};

const initialState: SettingsState = {
  selectedNewsCategories: ["top", "technology"],
};

const settingsSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    toggleNewsCategory: (state, action: PayloadAction<string>) => {
      const category = action.payload;
      if (state.selectedNewsCategories.includes(category)) {
        state.selectedNewsCategories = state.selectedNewsCategories.filter(
          (c) => c !== category
        );
      } else {
        state.selectedNewsCategories.push(category);
      }
    },
  },
});

export const { toggleNewsCategory } = settingsSlice.actions;

export default settingsSlice.reducer;
