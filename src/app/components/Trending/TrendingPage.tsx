import React from "react";
import TrendingPageTabs from "./TrendingPageTabs";
import TrendingPageContent from "./TrendingPageContent";
import { useSelector } from "react-redux";
import { RootState } from "@/app/lib/store/store";

const TrendingPage = () => {
  const theme = useSelector((store: RootState) => store.uiPreferences.theme);
  const isDark = theme === "dark";
  return (
    <div
      className={`w-full min-h-full p-4 flex flex-col gap-4 ${
        isDark ? "bg-gray-800 text-white" : "bg-gray-200 text-black"
      }`}
    >
      <h2 className="text-2xl font-bold">Trendings</h2>
      <TrendingPageTabs />
      <TrendingPageContent />
    </div>
  );
};

export default TrendingPage;
