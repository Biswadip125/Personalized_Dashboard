"use client";
import { movieData, NewsData } from "@/app/types/types";
import {
  fetchTrendingmovies,
  fetchTrendingNews,
} from "@/app/utils/fetchTrendingContents";
import React, { useEffect, useRef, useState } from "react";
import MovieCard from "../Dashboard/DashboardCards/MovieCard";
import MovieCardSkeleton from "../skeletons/SkeletonCard";
import NewsCard from "../Dashboard/DashboardCards/NewsCard";
import { useSelector } from "react-redux";
import { RootState } from "@/app/lib/store/store";

const TrendingPageContent = () => {
  const [trendingMovies, setTrendingMovies] = useState<movieData[] | null>(
    null
  );
  const [trendingNewses, setTrendingNewses] = useState<NewsData[] | null>(null);
  const [newsNextPage, setNewsNextPage] = useState<string | null>(null);
  const [loadingMovies, setLoadingMovies] = useState(false);
  const [loadingNews, setLoadingNews] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);
  const selectedTrendingTab = useSelector(
    (store: RootState) => store.uiPreferences.selectedTrendingTab
  );
  const selectedNewsCategories = useSelector(
    (store: RootState) => store.settings.selectedNewsCategories
  );
  const trendingRef = useRef<HTMLDivElement | null>(null);
  const theme = useSelector((store: RootState) => store.uiPreferences.theme);
  const isDark = theme === "dark";

  useEffect(() => {
    const fetchTrendingContents = async () => {
      if (selectedTrendingTab === "Movies") {
        setLoadingMovies(true);
        const trendingMovies = await fetchTrendingmovies(currentPage);
        setTrendingMovies(trendingMovies);
        setLoadingMovies(false);
      }
      if (selectedTrendingTab === "News") {
        setLoadingNews(true);
        const res = await fetchTrendingNews(selectedNewsCategories);
        setTrendingNewses(res?.results);
        setNewsNextPage(res?.nextPage);
        setLoadingNews(false);
      }
    };
    fetchTrendingContents();
  }, [currentPage, selectedTrendingTab, selectedNewsCategories]);

  useEffect(() => {
    trendingRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [currentPage]);

  const loadMoreNews = async () => {
    if (!newsNextPage) return;
    setLoadingNews(true);
    const res = await fetchTrendingNews(selectedNewsCategories, newsNextPage);

    setTrendingNewses((prev) => [...(prev ?? []), ...res?.results]);
    setNewsNextPage(res?.nextPage);
    setLoadingNews(false);
  };
  return (
    <div className="flex-1 " ref={trendingRef}>
      {/*Movies */}
      {selectedTrendingTab === "Movies" && (
        <section>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 space-y-3 gap-4">
            {!loadingMovies
              ? trendingMovies?.map((trendingMovie: movieData) => (
                  <MovieCard movieData={trendingMovie} key={trendingMovie.id} />
                ))
              : [1, 2, 3].map((elem) => <MovieCardSkeleton key={elem} />)}
          </div>
          <div className="flex gap-2 justify-center mt-4">
            <button
              onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
              disabled={currentPage === 1}
              className={`px-4 py-2 ${
                isDark
                  ? "bg-gray-900/50 hover:bg-gray-700/40"
                  : "bg-gray-200 hover:bg-gray-300"
              } rounded  disabled:opacity-50 cursor-pointer`}
            >
              Prev
            </button>
            <span className="px-2 py-2">{currentPage}</span>
            <button
              onClick={() => setCurrentPage((p) => p + 1)}
              className={`px-4 py-2 ${
                isDark
                  ? "bg-gray-900/50 hover:bg-gray-700/40 "
                  : "bg-gray-200 hover:bg-gray-300"
              }  rounded cursor-pointer`}
            >
              Next
            </button>
          </div>
        </section>
      )}
      {/*News */}
      {selectedTrendingTab === "News" && (
        <section>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 space-y-3 gap-4">
            {trendingNewses && trendingNewses.length > 0
              ? trendingNewses?.map((trendingNews: NewsData) => (
                  <NewsCard
                    article={trendingNews}
                    key={trendingNews.article_id}
                  />
                ))
              : [1, 2, 3].map((elem) => <MovieCardSkeleton key={elem} />)}
          </div>
          {newsNextPage && (
            <div className="flex justify-center mt-4">
              <button
                onClick={loadMoreNews}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:opacity-50 cursor-pointer"
                disabled={loadingNews}
              >
                {loadingNews ? "Loading..." : "Load More News"}
              </button>
            </div>
          )}
        </section>
      )}
    </div>
  );
};

export default TrendingPageContent;
