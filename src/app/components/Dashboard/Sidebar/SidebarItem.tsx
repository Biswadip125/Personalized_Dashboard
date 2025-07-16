import { setSelectedSidebarItem } from "@/app/lib/store/slices/uiPreferencesSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/app/lib/store/store";
const SidebarItem = ({
  sidebarText,
  icon: Icon,
}: {
  sidebarText: string;
  icon: React.ElementType;
}) => {
  const dispatch = useDispatch();
  const selectedSidebarItem = useSelector(
    (store: RootState) => store.uiPreferences.selectedSidebarItem
  );
  const theme = useSelector((store: RootState) => store.uiPreferences.theme);
  const isDark = theme === "dark";
  return (
    <div
      className={`w-full  ${
        isDark ? "hover:bg-gray-700" : "hover:bg-gray-400/80"
      }
       rounded-full px-3 py-3 flex gap-2 items-center cursor-pointer transition-all duration-200 ${
         selectedSidebarItem === sidebarText
           ? isDark
             ? "bg-gray-600"
             : "bg-gray-500/70"
           : isDark
           ? "bg-gray-800"
           : "bg-gray-300"
       }`}
      onClick={() => dispatch(setSelectedSidebarItem(sidebarText))}
    >
      <Icon fill={selectedSidebarItem === sidebarText ? "orange" : "none"} />
      {sidebarText}
    </div>
  );
};

export default SidebarItem;
