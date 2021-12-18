import React from "react";
import { tabId } from "../../../shared/constants/constants";

interface TabProps {
  id: number;
  title: string;
  selectedTab: number;
  onClick: () => void;
}

const TabItem = ({ id, title, selectedTab, onClick }: TabProps) => {
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

interface CustomTapProps {
  selectedTab: number;
  setSelectedTab: any;
}

const CustomTab = ({ selectedTab, setSelectedTab }: CustomTapProps) => {
  return (
    <div
      id="tab_container"
      className="flex justify-between border-4  bg-gray-200 mt-4 w-full py-1 rounded-2xl "
    >
      <TabItem
        id={0}
        title="All"
        selectedTab={selectedTab}
        onClick={() => {
          setSelectedTab(0);
        }}
      />
      <TabItem
        id={tabId.ID_PHOTO}
        title="증명사진"
        selectedTab={selectedTab}
        onClick={() => {
          setSelectedTab(tabId.ID_PHOTO);
        }}
      />
      <TabItem
        id={tabId.PROFILE}
        title="프로필"
        selectedTab={selectedTab}
        onClick={() => {
          setSelectedTab(tabId.PROFILE);
        }}
      />
      <TabItem
        id={tabId.BODY_PROFILE}
        title="바디프로필"
        selectedTab={selectedTab}
        onClick={() => {
          setSelectedTab(tabId.BODY_PROFILE);
        }}
      />
      <TabItem
        id={tabId.SNAP_SHOT}
        title="스냅샷"
        selectedTab={selectedTab}
        onClick={() => {
          setSelectedTab(tabId.SNAP_SHOT);
        }}
      />
    </div>
  );
};

export default CustomTab;
