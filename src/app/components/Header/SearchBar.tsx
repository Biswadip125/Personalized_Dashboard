import {
  setSearchResults,
  setSearchValue,
} from "@/app/lib/store/slices/searchSlice";
import { setSelectedSidebarItem } from "@/app/lib/store/slices/uiPreferencesSlice";
import { RootState } from "@/app/lib/store/store";
import {
  fetchMoviesByQuery,
  fetchNewsResultsByQuery,
} from "@/app/utils/fetchSearchResults";
import { Search } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const SearchBar = () => {
  const theme = useSelector((store: RootState) => store.uiPreferences.theme);
  const searchValue = useSelector(
    (store: RootState) => store.search.searchValue
  );
  const selectedSearchTab = useSelector(
    (store: RootState) => store.search.selectedSearchTab
  );

  const dispatch = useDispatch();

  const [query, setQuery] = useState("");

  useEffect(() => {
    const timeout = setTimeout(() => {
      dispatch(setSearchValue(query));
    }, 500);

    return () => clearTimeout(timeout);
  }, [query, dispatch]);

  useEffect(() => {
    if (searchValue) {
      fetchSearchResults(searchValue);
    }
  }, [searchValue]);

  const fetchSearchResults = async (searchTerm: string) => {
    if (selectedSearchTab === "Movies") {
      const results = await fetchMoviesByQuery(searchTerm);
      dispatch(setSearchResults(results));
    }
    if (selectedSearchTab === "News") {
      const results = await fetchNewsResultsByQuery(searchTerm);
      dispatch(setSearchResults(results));
    }
  };

  return (
    <div className="relative">
      <input
        type="text"
        placeholder="Search for anything"
        className={`border-1 rounded-3xl pl-4 pr-10 py-1.5 text-md ${
          theme === "light"
            ? "placeholder-black border-black "
            : "placeholder-white border-white"
        }`}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button
        className="absolute top-[1px] right-0 px-2 py-2 bg-gray-400 rounded-3xl flex items-center justify-center cursor-pointer"
        onClick={() => dispatch(setSelectedSidebarItem("Search"))}
        disabled={!query}
      >
        <Search
          className=""
          size={20}
          onClick={() => searchValue && fetchSearchResults(searchValue)}
        />
      </button>
    </div>
  );
};

export default SearchBar;
