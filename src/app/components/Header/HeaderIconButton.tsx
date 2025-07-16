import { RootState } from "@/app/lib/store/store";
import React from "react";
import { useSelector } from "react-redux";

const HeaderIconButton = ({
  icon: Icon,
  label,
  action,
}: {
  icon: React.ElementType;
  label: string;
  action?: () => void;
}) => {
  const theme = useSelector((store: RootState) => store.uiPreferences.theme);
  return (
    <button
      className={`py-2 px-2 ${
        theme === "light" ? "bg-gray-300" : "bg-gray-700"
      } rounded-full cursor-pointer`}
      title={label}
      onClick={action}
    >
      <Icon />
    </button>
  );
};

export default HeaderIconButton;
