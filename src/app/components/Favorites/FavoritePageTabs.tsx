import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/app/lib/store/store";
import { setSelectedFavoriteTab } from "@/app/lib/store/slices/uiPreferencesSlice";
const FavoritePageTabs = () => {
  const selectedFavoriteTab = useSelector(
    (store: RootState) => store.uiPreferences.selectedFavoriteTab
  );
  const theme = useSelector((store: RootState) => store.uiPreferences.theme);

  const isDark = theme === "dark";
  const dispatch = useDispatch();
  return (
    <div className="flex items-center gap-2">
      {["Movies", "News", "Posts"].map((tab, index) => (
        <div
          key={index}
          className={`px-4 py-1 text-sm rounded-3xl cursor-pointer transition-all duration-300 ${
            selectedFavoriteTab === tab
              ? "bg-blue-500 text-white"
              : isDark
              ? "bg-gray-700 text-gray-200"
              : "bg-gray-400/50 text-black"
          }`}
          onClick={() => dispatch(setSelectedFavoriteTab(tab))}
        >
          {tab}
        </div>
      ))}
    </div>
  );
};

export default FavoritePageTabs;
