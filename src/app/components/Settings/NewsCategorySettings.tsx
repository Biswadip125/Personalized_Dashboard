import { toggleNewsCategory } from "@/app/lib/store/slices/settingsSlice";
import { RootState } from "@/app/lib/store/store";
import { useDispatch, useSelector } from "react-redux";

const NewsCategorySettings = () => {
  const newsCategories = [
    "top", // Top headlines
    "technology",
    "business",
    "sports",
    "entertainment",
    "health",
    "science",
    "world",
    "politics",
    "environment",
  ];

  const dispatch = useDispatch();
  const selectedNewsCategories = useSelector(
    (store: RootState) => store.settings.selectedNewsCategories
  );
  return (
    <div>
      <h3 className="text-lg font-semibold mb-2">News Categories</h3>
      <div className="grid grid-cols-2 gap-2">
        {newsCategories.map((cat) => (
          <label key={cat} className="flex items-center gap-2 text-lg">
            <input
              type="checkbox"
              checked={selectedNewsCategories.includes(cat)}
              className="h-4 w-4"
              onChange={() => dispatch(toggleNewsCategory(cat))}
            />
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </label>
        ))}
      </div>
    </div>
  );
};

export default NewsCategorySettings;
