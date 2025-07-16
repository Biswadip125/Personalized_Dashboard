"use client";
import { setArticles } from "@/app/lib/store/slices/favoritesSlice";
import { RootState } from "@/app/lib/store/store";
import { NewsData } from "@/app/types/types";
import { CircleX, Plus } from "lucide-react";

import Link from "next/link";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

const NewsCard = ({ article }: { article: NewsData }) => {
  const favoriteNewses = useSelector(
    (store: RootState) => store.favorites.articles
  );
  const dispatch = useDispatch();
  const isFavorite = favoriteNewses.some(
    (favoriteNews: NewsData) => favoriteNews.article_id === article.article_id
  );
  const theme = useSelector((store: RootState) => store.uiPreferences.theme);
  const isDark = theme === "dark";
  return (
    <div
      className={`${
        isDark ? "bg-gray-700/60 text-gray-100" : "bg-white text-black"
      } rounded-xl shadow hover:shadow-lg transition p-4 flex flex-col gap-2`}
    >
      {/* Title */}
      <h3 className="text-lg font-semibold leading-tight">{article.title}</h3>

      {/* Description */}
      <p
        className={`text-sm ${
          isDark ? "text-gray-300" : "text-gray-600"
        } leading-snug line-clamp-3`}
      >
        {article.description}
      </p>

      {/* Meta Info */}
      <div
        className={`text-xs ${
          isDark ? "text-gray-400" : "text-gray-500"
        } flex items-center gap-1`}
      >
        <span>{article.source_name}</span>
        <span>&middot;</span>
        <span>{new Date(article.pubDate).toISOString().split("T")[0]}</span>
      </div>

      {/* Footer: Read More + Favorite Toggle */}
      <div className="flex items-center justify-between ">
        <Link
          href={article.source_url}
          target="_blank"
          rel="noopener noreferrer"
          className={`text-sm font-medium hover:underline ${
            isDark ? "text-blue-400" : "text-blue-600"
          }`}
        >
          Read More →
        </Link>

        {isFavorite ? (
          <button
            className={`flex items-center justify-center gap-1 px-2 py-2 rounded-2xl ${
              isDark ? "bg-gray-700 text-white" : "bg-gray-200 text-black"
            } hover:opacity-90 transition`}
            onClick={() =>
              dispatch(
                setArticles(
                  favoriteNewses.filter(
                    (p: NewsData) => p.article_id !== article.article_id
                  )
                )
              )
            }
            title="Remove from Favorites"
          >
            <CircleX size={18} className="align-middle" />
          </button>
        ) : (
          <button
            className={`flex items-center justify-center gap-1 px-2 py-2 rounded-2xl ${
              isDark ? "bg-gray-700 text-white" : "bg-gray-200 text-black"
            } hover:opacity-90 transition`}
            onClick={() => dispatch(setArticles([...favoriteNewses, article]))}
            title="Add to Favorites"
          >
            <Plus size={16} className="align-middle" />
          </button>
        )}
      </div>
    </div>
  );
};

export default NewsCard;
