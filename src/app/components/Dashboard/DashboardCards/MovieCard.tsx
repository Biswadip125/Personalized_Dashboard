"use client";

import { setMovies } from "@/app/lib/store/slices/favoritesSlice";
import { movieData } from "@/app/types/types";
import { CircleX, Plus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/app/lib/store/store";

const MovieCard = ({ movieData }: { movieData: movieData }) => {
  const favoriteMovies = useSelector(
    (store: RootState) => store.favorites.movies
  );
  const isFavorite = favoriteMovies.some(
    (fav: movieData) => fav.id === movieData.id
  );
  const dispatch = useDispatch();

  const theme = useSelector((store: RootState) => store.uiPreferences.theme);

  const isDark = theme === "dark";
  return (
    <div
      className={`p-4 ${
        isDark ? "bg-gray-700/60 text-gray-100" : "bg-white text-black"
      } flex flex-col gap-2 rounded-xl shadow-sm`}
    >
      {/* Movie Image */}
      <Image
        src={`https://image.tmdb.org/t/p/w500${movieData.poster_path}`}
        alt={movieData.title}
        width={300}
        height={300}
        className="rounded-xl object-cover"
      />

      {/* Title */}
      <h3 className="text-lg font-semibold">{movieData.title}</h3>

      {/* Description */}
      <p
        className={`text-sm ${
          isDark ? "text-gray-300" : "text-gray-600"
        } line-clamp-3`}
      >
        {movieData.overview}
      </p>

      {/* Meta Data */}
      <div className={`text-xs ${isDark ? "text-gray-400" : "text-gray-500"}`}>
        <span>
          Released:{" "}
          {movieData?.release_date
            ? new Date(movieData?.release_date).toISOString().split("T")[0]
            : "Release date not available"}
        </span>
      </div>

      {/* CTA */}
      <div className="flex items-center justify-between mt-2">
        <Link
          href={`https://www.themoviedb.org/movie/${movieData?.id}`}
          className={`text-sm ${
            isDark ? "text-blue-400" : "text-blue-600"
          } hover:underline cursor-pointer`}
        >
          View Details
        </Link>

        {!isFavorite ? (
          <button
            className={`flex items-center justify-center gap-1 hover:cursor-pointer ${
              isDark ? "bg-gray-700 text-white" : "bg-gray-200 text-black"
            } px-2 py-2 rounded-2xl hover:opacity-90 transition`}
            onClick={() => dispatch(setMovies([...favoriteMovies, movieData]))}
            title="Add to Favorites"
          >
            <Plus size={16} className="mt-0.5" />
          </button>
        ) : (
          <button
            className={`flex items-center justify-center gap-1 hover:cursor-pointer ${
              isDark ? "bg-gray-700 text-white" : "bg-gray-200 text-black"
            } px-2 py-2 rounded-2xl hover:opacity-90 transition`}
            onClick={() =>
              dispatch(
                setMovies(
                  favoriteMovies.filter((p: movieData) => p.id !== movieData.id)
                )
              )
            }
            title="Remove from Favorites"
          >
            <CircleX size={18} className="mt-0.5" />
          </button>
        )}
      </div>
    </div>
  );
};

export default MovieCard;
