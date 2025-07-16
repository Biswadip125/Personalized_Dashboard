"use client";

import { useSelector } from "react-redux";
import FeedPage from "./components/Dashboard/DashboardPages/FeedPage";
import Sidebar from "./components/Dashboard/Sidebar/Sidebar";
import { RootState } from "./lib/store/store";
import FavoritePage from "./components/Favorites/FavoritePage";
import TrendingPage from "./components/Trending/TrendingPage";
import SettingsPage from "./components/Settings/SettingsPage";
import SearchPage from "./components/Search/SearchPage";

export default function Home() {
  const selectedSidebarItem = useSelector(
    (store: RootState) => store.uiPreferences.selectedSidebarItem
  );

  return (
    <div className=" w-full h-full flex">
      <Sidebar />
      <div className="flex-1 overflow-y-auto scrollbar-hide">
        {selectedSidebarItem === "Your Feed" ? (
          <FeedPage />
        ) : selectedSidebarItem === "Trendings" ? (
          <TrendingPage />
        ) : selectedSidebarItem === "Favorites" ? (
          <FavoritePage />
        ) : selectedSidebarItem === "Settings" ? (
          <SettingsPage />
        ) : (
          <SearchPage />
        )}
      </div>
    </div>
  );
}
