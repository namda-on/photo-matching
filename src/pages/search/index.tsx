import React, { useState } from "react";
import Card from "../../shared/components/card";
import Modal from "../../shared/components/modal";
import Layout from "../../shared/layout";
import FilterModal from "./components/filterModal";
import { Cards } from "./cardInfos";
import CustomTab from "./components/tab";
import { tabId } from "../../shared/constants/constants";

const SearchPage = () => {
  const [showFilterModal, setShowFilterModal] = useState(false);
  const [selectedTab, setSelectedTab] = useState<number>(0);

  const toggleModal = () => {
    setShowFilterModal((prevStatus) => !prevStatus);
  };

  return (
    <>
      <Modal show={showFilterModal} toggleModal={toggleModal}>
        <FilterModal
          toggleModal={() => {
            setShowFilterModal(false);
          }}
        />
      </Modal>
      <Layout>
        <button
          className="flex justify-between border-4 rounded-2xl bg-gray-200 mt-4 w-full"
          onClick={toggleModal}
        >
          <div className="flex w-2/5 border-r-2 items-center justify-end mr-4 h-full ">
            <img
              className="w-4 h-4"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Search_Icon.svg/1024px-Search_Icon.svg.png"
              alt="search"
            />
          </div>
          <div className="flex w-3/5 items-center justify-start">검색하기</div>
        </button>
        <div className="flex justify-between border-4  bg-gray-200 mt-4 w-full py-1 rounded-2xl ">
          <CustomTab
            id={0}
            title="All"
            selectedTab={selectedTab}
            onClick={() => {
              setSelectedTab(0);
            }}
          />
          <CustomTab
            id={tabId.ID_PHOTO}
            title="증명사진"
            selectedTab={selectedTab}
            onClick={() => {
              setSelectedTab(tabId.ID_PHOTO);
            }}
          />
          <CustomTab
            id={tabId.PROFILE}
            title="프로필"
            selectedTab={selectedTab}
            onClick={() => {
              setSelectedTab(tabId.PROFILE);
            }}
          />
          <CustomTab
            id={tabId.BODY_PROFILE}
            title="바디프로필"
            selectedTab={selectedTab}
            onClick={() => {
              setSelectedTab(tabId.BODY_PROFILE);
            }}
          />
          <CustomTab
            id={tabId.SNAP_SHOT}
            title="스냅샷"
            selectedTab={selectedTab}
            onClick={() => {
              setSelectedTab(tabId.SNAP_SHOT);
            }}
          />
        </div>
        <ul className="grid grid-cols-2 mt-4 gap-4 w-full">
          {Cards.filter((card) => {
            if (selectedTab === 0) return true;
            else return card.section === selectedTab;
          }).map((card) => (
            <Card cardInfo={card} />
          ))}
        </ul>
      </Layout>
    </>
  );
};

export default SearchPage;
