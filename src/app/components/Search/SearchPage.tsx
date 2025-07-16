import { RootState } from "@/app/lib/store/store";
import React from "react";
import { useSelector } from "react-redux";
import SearchPageTabs from "./SearchPageTabs";
import NewsCard from "../Dashboard/DashboardCards/NewsCard";
import MovieCard from "../Dashboard/DashboardCards/MovieCard";

const SearchPage = () => {
  const theme = useSelector((store: RootState) => store.uiPreferences.theme);

  const isDark = theme === "dark";
  const searchValue = useSelector(
    (store: RootState) => store.search.searchValue
  );

  const searchResults = useSelector(
    (store: RootState) => store.search.searchResults
  );
  const selectedSearchTab = useSelector(
    (store: RootState) => store.search.selectedSearchTab
  );
  return (
    <div
      className={`w-full min-h-full flex flex-col p-4 gap-4 ${
        isDark ? "bg-gray-800 text-white" : "bg-gray-200 text-black"
      }`}
    >
      <SearchPageTabs />
      <p className="text-lg">Search Results for : {searchValue}</p>
      <section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {searchResults?.map((searchResult, index: number) =>
            selectedSearchTab === "Movies" ? (
              <MovieCard key={index} movieData={searchResult} />
            ) : (
              <NewsCard article={searchResult} key={index} />
            )
          )}
        </div>
      </section>
    </div>
  );
};

export default SearchPage;
