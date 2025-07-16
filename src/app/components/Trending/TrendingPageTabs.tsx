import { setSelectedtrendingTab } from "@/app/lib/store/slices/uiPreferencesSlice";
import { RootState } from "@/app/lib/store/store";
import { useDispatch, useSelector } from "react-redux";

const TrendingPageTabs = () => {
  const selectedTrendingTab = useSelector(
    (store: RootState) => store.uiPreferences.selectedTrendingTab
  );
  const dispatch = useDispatch();
  const theme = useSelector((store: RootState) => store.uiPreferences.theme);
  const isDark = theme === "dark";
  return (
    <div className="flex items-center gap-2">
      {["Movies", "News", "Posts"].map((tab, index) => (
        <div
          key={index}
          className={`px-4 py-1 text-sm rounded-3xl cursor-pointer transition-all duration-300 ${
            selectedTrendingTab === tab
              ? "bg-blue-500 text-white"
              : isDark
              ? "bg-gray-700 text-gray-200"
              : "bg-gray-400/50 text-black"
          }`}
          onClick={() => dispatch(setSelectedtrendingTab(tab))}
        >
          {tab}
        </div>
      ))}
    </div>
  );
};

export default TrendingPageTabs;
