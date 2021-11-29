import React, { useState } from "react";
import CustomDropDown from "../../../shared/components/dropdown";
import Title from "./title";
import Layout from "../../../shared/layout";
import { DropDownOption } from "../../../shared/types";

const PHOTO_OPTIONS: DropDownOption[] = [
  { id: 1, optionName: "증명사진" },
  { id: 2, optionName: "스냅샷" },
  { id: 3, optionName: "프로필 사진" },
  { id: 4, optionName: "바디 프로필" },
  { id: 5, optionName: "야외 스냅샷" },
];

interface FilterPageProps {
  toggleModal: () => void;
}

const FilterModal = ({ toggleModal }: FilterPageProps) => {
  const [toggleDropDown, setToggleDropDown] = useState(false);

  const searchByFilter = () => {
    toggleModal();
  };

  return (
    <Layout>
      <button className="flex w-80 h-4 justify-start" onClick={toggleModal}>
        X
      </button>
      <Title name="사진종류" />
      <article
        className={"relative flex-col justify-center items-center w-full h-16"}
      >
        <button
          className={
            "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-30 h-10 border-2"
          }
          onClick={() => {
            setToggleDropDown(true);
          }}
        >
          사진 종류
        </button>
        <CustomDropDown show={toggleDropDown} options={PHOTO_OPTIONS} />
      </article>

      <button
        className="flex justify-center items-center border-4 rounded-2xl bg-gray-200 mt-4 w-48 h-10"
        onClick={searchByFilter}
      >
        <p>검색하기</p>
      </button>
    </Layout>
  );
};

export default FilterModal;
