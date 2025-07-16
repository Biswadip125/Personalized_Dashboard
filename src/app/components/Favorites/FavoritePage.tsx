"use client";

import React from "react";
import FavoritePageTabs from "./FavoritePageTabs";
import FavoritePageTabsContent from "./FavoritePageTabsContent";
import { useSelector } from "react-redux";
import { RootState } from "@/app/lib/store/store";

const FavoritePage = () => {
  const theme = useSelector((store: RootState) => store.uiPreferences.theme);

  const isDark = theme === "dark";
  return (
    <div
      className={`w-full min-h-full flex flex-col p-4 gap-4 ${
        isDark ? "bg-gray-800 text-white" : "bg-gray-200 text-black"
      }`}
    >
      <h2 className="text-2xl font-bold">Favorites</h2>
      <FavoritePageTabs />
      <FavoritePageTabsContent />
    </div>
  );
};

export default FavoritePage;
