import React, { useState } from "react";
import CustomDropDown from "../../shared/components/dropdown";
import Title from "./components/title";
import Layout from "../../shared/layout";
import { DropDownOption } from "../../shared/types";

const PHOTO_OPTIONS: DropDownOption[] = [
  { id: 1, optionName: "증명사진" },
  { id: 2, optionName: "스냅샷" },
  { id: 3, optionName: "프로필 사진" },
  { id: 4, optionName: "바디 프로필" },
  { id: 5, optionName: "야외 스냅샷" },
];

const FilterPage = () => {
  const [toggleDropDown, setToggleDropDown] = useState(false);

  return (
    <Layout>
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
    </Layout>
  );
};

export default FilterPage;
