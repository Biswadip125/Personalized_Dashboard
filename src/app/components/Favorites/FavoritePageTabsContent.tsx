import { RootState } from "@/app/lib/store/store";
import { movieData, NewsData, SocialPost } from "@/app/types/types";
import React from "react";
import { useSelector } from "react-redux";
import MovieCard from "../Dashboard/DashboardCards/MovieCard";
import NewsCard from "../Dashboard/DashboardCards/NewsCard";
import SocialMediaCard from "../Dashboard/DashboardCards/SocialMediaCard";

const FavoritePageTabsContent = () => {
  const favoriteMovies = useSelector(
    (store: RootState) => store.favorites.movies
  );
  const favoriteNewses = useSelector(
    (store: RootState) => store.favorites.articles
  );

  const favoritePosts = useSelector(
    (store: RootState) => store.favorites.socialPosts
  );
  const selectedFavoriteTab = useSelector(
    (store: RootState) => store.uiPreferences.selectedFavoriteTab
  );
  return (
    <div className="flex-1 ">
      {/*Movies Section */}
      {selectedFavoriteTab === "Movies" && (
        <section>
          {favoriteMovies.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 items-center w-full ">
              {favoriteMovies.map((favoriteMovie: movieData) => (
                <MovieCard movieData={favoriteMovie} key={favoriteMovie.id} />
              ))}
            </div>
          ) : (
            <p className="text-center text-xl font-bold">
              No Favorite Movies Yet
            </p>
          )}
        </section>
      )}
      {selectedFavoriteTab === "News" && (
        <section>
          {favoriteNewses.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4  w-full ">
              {favoriteNewses.map((favoriteNews: NewsData) => (
                <NewsCard
                  article={favoriteNews}
                  key={favoriteNews.article_id}
                />
              ))}
            </div>
          ) : (
            <p className="text-center text-xl font-bold ">
              No Favorite News Yet
            </p>
          )}
        </section>
      )}
      {selectedFavoriteTab === "Posts" && (
        <section>
          {favoritePosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 items-center w-full ">
              {favoritePosts.map((favoritePost: SocialPost) => (
                <SocialMediaCard
                  socialMediaPost={favoritePost}
                  key={favoritePost.id}
                />
              ))}
            </div>
          ) : (
            <p className="text-center text-xl font-bold">
              No Favorite Posts Yet
            </p>
          )}
        </section>
      )}
    </div>
  );
};

export default FavoritePageTabsContent;
