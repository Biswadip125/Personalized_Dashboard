"use client";
import { Moon, Settings, Sun, User2 } from "lucide-react";
import SearchBar from "./SearchBar";
import HeaderIconButton from "./HeaderIconButton";
import {
  setSelectedSidebarItem,
  toggleTheme,
} from "@/app/lib/store/slices/uiPreferencesSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/app/lib/store/store";

const Header = () => {
  const dispatch = useDispatch();
  const theme = useSelector((store: RootState) => store.uiPreferences.theme);

  return (
    <header className="w-full ">
      <div
        className={`w-full flex items-center justify-between py-4  ${
          theme === "light"
            ? "bg-gray-200 text-black"
            : "bg-gray-800 text-white"
        } px-2 border-b-1`}
      >
        <h1 className="font-bold text-2xl ">DashBoard</h1>
        <div className="flex items-center gap-4">
          <SearchBar />
          <HeaderIconButton
            icon={theme === "light" ? Moon : Sun}
            label="Toggele Dark Mode"
            action={
              theme === "light"
                ? () => dispatch(toggleTheme("dark"))
                : () => dispatch(toggleTheme("light"))
            }
          />
          <HeaderIconButton
            icon={Settings}
            label="Settings"
            action={() => dispatch(setSelectedSidebarItem("Settings"))}
          />
          <HeaderIconButton icon={User2} label="Account" />
        </div>
      </div>
    </header>
  );
};

export default Header;
