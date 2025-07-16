import React from "react";
import NewsCategorySettings from "./NewsCategorySettings";
import { useSelector } from "react-redux";
import { RootState } from "@/app/lib/store/store";

const SettingsPage = () => {
  const theme = useSelector((store: RootState) => store.uiPreferences.theme);
  const isDark = theme === "dark";
  return (
    <div
      className={`flex-1 flex flex-col ${
        isDark ? "bg-gray-800 text-white" : "bg-gray-200 text-black"
      } min-h-full p-4`}
    >
      <NewsCategorySettings />
    </div>
  );
};

export default SettingsPage;
