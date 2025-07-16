import { configureStore } from "@reduxjs/toolkit";
import favoriteSliceReducer from "@/app/lib/store/slices/favoritesSlice";
import uiPreferencesReducer from "@/app/lib/store/slices/uiPreferencesSlice";
import settingsReducer from "@/app/lib/store/slices/settingsSlice";
import searchReducer from "@/app/lib/store/slices/searchSlice";

export const store = configureStore({
  reducer: {
    favorites: favoriteSliceReducer,
    uiPreferences: uiPreferencesReducer,
    settings: settingsReducer,
    search: searchReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
