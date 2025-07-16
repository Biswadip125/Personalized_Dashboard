import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedSidebarItem: "Your Feed",
  selectedFavoriteTab: "Movies",
  selectedTrendingTab: "Movies",

  theme: "light",
};

const uiPreferencesSlice = createSlice({
  name: "uiPreferences",
  initialState,
  reducers: {
    setSelectedSidebarItem: (state, action) => {
      state.selectedSidebarItem = action.payload;
    },
    setSelectedFavoriteTab: (state, action) => {
      state.selectedFavoriteTab = action.payload;
    },
    setSelectedtrendingTab: (state, action) => {
      state.selectedTrendingTab = action.payload;
    },

    toggleTheme: (state, action) => {
      state.theme = action.payload;
    },
  },
});

export const {
  setSelectedSidebarItem,
  setSelectedFavoriteTab,
  setSelectedtrendingTab,
  toggleTheme,
} = uiPreferencesSlice.actions;

export default uiPreferencesSlice.reducer;
