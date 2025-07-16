import {
  setSearchResults,
  setSearchValue,
  setSelectedSearchTab,
} from "@/app/lib/store/slices/searchSlice";
import { RootState } from "@/app/lib/store/store";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

const SearchPageTabs = () => {
  const selectedSearchTab = useSelector(
    (store: RootState) => store.search.selectedSearchTab
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
            selectedSearchTab === tab
              ? "bg-blue-500 text-white"
              : isDark
              ? "bg-gray-700 text-gray-200"
              : "bg-gray-400/50 text-black"
          }`}
          onClick={() => {
            dispatch(setSelectedSearchTab(tab));
            dispatch(setSearchResults([]));
            dispatch(setSearchValue(""));
          }}
        >
          {tab}
        </div>
      ))}
    </div>
  );
};

export default SearchPageTabs;
