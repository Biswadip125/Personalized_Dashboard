"use client";

import { fetchMovies, fetchNews } from "@/app/utils/fetchContents";
import NewsCard from "../DashboardCards/NewsCard";
import {
  movieData,
  moviesData,
  NewsData,
  newsesData,
  SocialPost,
} from "@/app/types/types";
import { mockSocialPosts as socialMediaPosts } from "@/app/utils/mockSocialPosts";
import MovieCard from "../DashboardCards/MovieCard";
import SocialMediaCard from "../DashboardCards/SocialMediaCard";
import { useEffect, useState } from "react";

import { useSelector } from "react-redux";
import { RootState } from "@/app/lib/store/store";
import SkeletonCard from "../../skeletons/SkeletonCard";

const FeedPage = () => {
  const [moviesData, setMoviesData] = useState<moviesData | null>(null);
  const [newsData, setNewsData] = useState<newsesData | null>(null);

  const selectedNewsCategories = useSelector(
    (store: RootState) => store.settings.selectedNewsCategories
  );

  const theme = useSelector((store: RootState) => store.uiPreferences.theme);

  const isDark = theme === "dark";
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [movies, news] = await Promise.all([
          fetchMovies(),
          fetchNews(selectedNewsCategories),
        ]);
        setMoviesData(movies);
        setNewsData(news);
      } catch (err) {
        console.log("Failed to fetch", err);
      }
    };
    fetchData();
  }, []);

  return (
    <div
      className={`w-full ${
        isDark ? "bg-gray-800 text-white" : "bg-gray-200 text-black"
      } px-4 py-2 overflow-y-auto flex flex-col`}
    >
      {/*News Section*/}
      <section>
        <h2 className="text-xl font-bold mb-4">Top News</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {newsData && newsData.results?.length > 0
            ? newsData?.results
                ?.slice(0, 3)
                .map((article: NewsData, index: number) => (
                  <NewsCard key={index} article={article} />
                ))
            : [1, 2, 3].map((num) => <SkeletonCard key={num} />)}
        </div>
      </section>
      {/*Recommendation Scetion */}
      <h2 className="text-xl font-bold my-4">Recommendations</h2>
      <section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {moviesData && moviesData.results.length > 0
            ? moviesData?.results
                ?.slice(0, 3)
                .map((movieData: movieData, index: number) => (
                  <MovieCard key={index} movieData={movieData} />
                ))
            : [1, 2, 3].map((num) => <SkeletonCard key={num} />)}
        </div>
      </section>
      {/*Social Media Posts Section */}
      <h2 className="text-xl font-bold my-4">Social Media Posts</h2>
      <section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {socialMediaPosts.map(
            (socialMediaPost: SocialPost, index: number) => (
              <SocialMediaCard key={index} socialMediaPost={socialMediaPost} />
            )
          )}
        </div>
      </section>
    </div>
  );
};

export default FeedPage;
