import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchValue: null,
  searchResults: [],
  selectedSearchTab: "Movies",
};

const searchSlice = createSlice({
  name: "search",
  initialState,

  reducers: {
    setSearchValue: (state, action) => {
      state.searchValue = action.payload;
    },
    setSearchResults: (state, action) => {
      state.searchResults = action.payload;
    },
    setSelectedSearchTab: (state, action) => {
      state.selectedSearchTab = action.payload;
    },
  },
});

export const { setSearchValue, setSearchResults, setSelectedSearchTab } =
  searchSlice.actions;

export default searchSlice.reducer;
