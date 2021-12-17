import React from "react";

interface TabProps {
  id: number;
  title: string;
  selectedTab: number;
  onClick: () => void;
}

const CustomTab = ({ id, title, selectedTab, onClick }: TabProps) => {
  const backGroundColor = id === selectedTab ? "bg-gray-50" : "";

  return (
    <button
      className={
        "flex w-1/4 items-center text-sm justify-center rounded-xl py-1 " +
        backGroundColor
      }
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export default CustomTab;
