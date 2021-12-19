import React, { useEffect, useState } from "react";
import Card from "../../shared/components/card";
import Modal from "../../shared/components/modal";
import Layout from "../../shared/layout";
import FilterModal from "./components/filterModal";
import { Cards } from "./cardInfos";
import CustomTab from "./components/tab";
import HashTag from "../../shared/components/hashtag";
import { PHOTO_OPTIONS } from "../../shared/constants/constants";

export interface FilterState {
  photoType: number;
  hashTags?: string[];
  priceRange: number[];
}

const SearchPage = () => {
  const [showFilterModal, setShowFilterModal] = useState(false);
  const [selectedTab, setSelectedTab] = useState<number>(0);
  const [filterCondition, setFilterCondition] = useState<FilterState | null>(
    null
  );

  const toggleModal = () => {
    setShowFilterModal((prevStatus) => !prevStatus);
  };

  useEffect(() => {
    showFilterModal
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "unset");
  }, [showFilterModal]);

  useEffect(() => {
    if (filterCondition) {
      setSelectedTab(filterCondition?.photoType);
    }
  }, [filterCondition]);

  const deleteCondition = () => {
    setFilterCondition(null);
    setSelectedTab(0);
  };

  return (
    <>
      <Modal show={showFilterModal} toggleModal={toggleModal}>
        <FilterModal
          setFilterCondition={setFilterCondition}
          toggleModal={() => {
            setShowFilterModal(false);
          }}
        />
      </Modal>
      <Layout>
        {filterCondition ? (
          <div
            id="filter_condition"
            className="flex justify-center items-center   rounded-2xl bg-gray-100 mt-4 w-full h-10"
          >
            <div className="ml-1 px-3 text-sm border-r-2 border-gray-400">
              {PHOTO_OPTIONS.filter(
                (option) => option.id === filterCondition.photoType
              ).map((option) => (
                <p key={`option${option.id}`}>{option.optionName}</p>
              ))}
            </div>
            <div className="ml-4 px-3 text-sm border-r-2 border-gray-400">
              가격 :
              {" " +
                filterCondition.priceRange[0] +
                "~" +
                filterCondition.priceRange[1]}
            </div>
            <div className="flex px-3">
              {filterCondition.hashTags?.map((hashtag) => (
                <HashTag
                  key={`hashtag${hashtag}`}
                  name={hashtag}
                  small={true}
                />
              ))}
            </div>
            <button onClick={deleteCondition}>x</button>
          </div>
        ) : (
          <>
            <button
              id="search_button"
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
              <div className="flex w-3/5 items-center justify-start">
                검색하기
              </div>
            </button>
            <CustomTab
              selectedTab={selectedTab}
              setSelectedTab={setSelectedTab}
            />
          </>
        )}

        <ul className="grid grid-cols-2 mt-4 gap-x-1 gap-y-1 w-full">
          {Cards.filter((card) => {
            if (!filterCondition && selectedTab === 0) return true;
            if (filterCondition) {
              const { priceRange, hashTags, photoType } = filterCondition;
              const costCondition =
                card.price >= priceRange[0] && card.price <= priceRange[1];
              const hashTagCondition =
                !hashTags ||
                (hashTags &&
                  card.hashTags?.some((hashTag) => hashTags.includes(hashTag)));
              const photoTypeCondition =
                photoType === 0 || card.section === photoType;
              return costCondition && hashTagCondition && photoTypeCondition;
            } else return card.section === selectedTab;
          }).map((card) => (
            <Card key={card.id} cardInfo={card} />
          ))}
        </ul>
      </Layout>
    </>
  );
};

export default SearchPage;
