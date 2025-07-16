"use client";

import { Flame, LayoutDashboard, Settings, Star } from "lucide-react";
import SidebarItem from "./SidebarItem";
import { useSelector } from "react-redux";
import { RootState } from "@/app/lib/store/store";

const Sidebar = () => {
  const sideBarItems = [
    { dashboardItem: "Your Feed", icon: LayoutDashboard },
    {
      dashboardItem: "Trendings",
      icon: Flame,
    },
    { dashboardItem: "Favorites", icon: Star },
    { dashboardItem: "Settings", icon: Settings },
  ];

  const theme = useSelector((store: RootState) => store.uiPreferences.theme);
  return (
    <div
      className={`flex flex-col max-w-64 w-full ${
        theme === "light" ? "bg-gray-200" : "bg-gray-800 text-white"
      } w-full px-3 py-4 gap-4 border-r-1`}
    >
      <h1 className="text-2xl font-bold border-b-2 mb-4">Sidebar</h1>
      <div className="flex flex-col gap-4">
        {sideBarItems.map(({ dashboardItem, icon }) => (
          <SidebarItem
            key={dashboardItem}
            sidebarText={dashboardItem}
            icon={icon}
          />
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
