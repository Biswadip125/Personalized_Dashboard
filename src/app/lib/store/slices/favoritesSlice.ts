import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  articles: [],
  movies: [],
  socialPosts: [],
};

export const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    setArticles: (state, action) => {
      state.articles = action.payload;
    },
    setMovies: (state, action) => {
      state.movies = action.payload;
    },
    setSocialPosts: (state, action) => {
      state.socialPosts = action.payload;
    },
  },
});

export const { setArticles, setMovies, setSocialPosts } =
  favoritesSlice.actions;

export default favoritesSlice.reducer;
