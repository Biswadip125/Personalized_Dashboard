import { RootState } from "@/app/lib/store/store";
import React from "react";
import { useSelector } from "react-redux";

const SkeletonCard = () => {
  const theme = useSelector((store: RootState) => store.uiPreferences.theme);
  const isDark = theme === "dark";
  return (
    <div
      className={`p-4 flex flex-col gap-2 rounded-xl animate-pulse ${
        isDark ? "bg-gray-700/60" : "bg-white"
      }`}
    >
      <div
        className={`${
          isDark ? "bg-gray-700" : "bg-gray-300"
        } w-full h-48 rounded-lg`}
      />
      <div
        className={`${
          isDark ? "bg-gray-600" : "bg-gray-200"
        } h-5 rounded w-3/4`}
      />
      <div
        className={`${
          isDark ? "bg-gray-600" : "bg-gray-200"
        } h-3 rounded w-full`}
      />
      <div
        className={`${
          isDark ? "bg-gray-600" : "bg-gray-200"
        } h-3 rounded w-11/12`}
      />
      <div
        className={`${
          isDark ? "bg-gray-600" : "bg-gray-200"
        } h-3 rounded w-1/2`}
      />
      <div
        className={`${
          isDark ? "bg-gray-700" : "bg-gray-300"
        } h-3 rounded w-1/3 mt-2`}
      />
    </div>
  );
};

export default SkeletonCard;
