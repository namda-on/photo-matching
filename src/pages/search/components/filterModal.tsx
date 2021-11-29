import React, { useRef, useState } from "react";
import CustomDropDown from "../../../shared/components/dropdown";
import Title from "./title";
import Layout from "../../../shared/layout";
import { DropDownOption } from "../../../shared/types";
import HashTag from "../../../shared/components/hashtag";
import Slider from "@mui/material/Slider";
enum PhotoType {
  "사진종류" = "사진종류",
  "증명사진" = "증명사진",
  "프로필 사진" = "프로필 사진",
  "바디 프로필" = "바디 프로필",
  "스냅샷" = "스냅샷",
  "야외 스냅샷" = "야외 스냅샷",
}

const PHOTO_OPTIONS: DropDownOption[] = [
  { id: PhotoType.증명사진, optionName: "증명사진" },
  { id: PhotoType.스냅샷, optionName: "스냅샷" },
  { id: PhotoType["프로필 사진"], optionName: "프로필 사진" },
  { id: PhotoType["바디 프로필"], optionName: "바디 프로필" },
  { id: PhotoType["야외 스냅샷"], optionName: "야외 스냅샷" },
];

interface FilterPageProps {
  toggleModal: () => void;
}

const nullPosition = {
  x: 0,
  y: 0,
  height: 0,
};

const formatThreeDigitRex = /\B(?=(\d{3})+(?!\d))/g;

const formatNumber = (value: number) => {
  return String(value).replace(formatThreeDigitRex, ",");
};
const getCostValueText = (value: number) => {
  const formattedCost = formatNumber(value);
  return `${formattedCost} 원`;
};

const costMarks = [
  { value: 0, label: getCostValueText(0) },
  { value: 20000, label: getCostValueText(20000) },
  { value: 50000, label: getCostValueText(50000) },
  { value: 100000, label: getCostValueText(100000) },
];

const FilterModal = ({ toggleModal }: FilterPageProps) => {
  const [toggleDropDown, setToggleDropDown] = useState(false);
  const [photoType, setPhotoType] = useState<PhotoType>(PhotoType.사진종류);
  const photoSelect = useRef<HTMLButtonElement>(null);
  const searchByFilter = () => {
    toggleModal();
  };

  const toggleDropDownHandler = () => {
    setToggleDropDown((prevStatus) => !prevStatus);
  };

  const photoSelectPosition = photoSelect.current?.getBoundingClientRect();

  return (
    <Layout>
      <section className="flex w-full h-4 justify-end mb-6">
        <button className="text-xl" onClick={toggleModal}>
          X
        </button>
      </section>
      <Title name="사진종류" bold={true} />
      <article
        className={
          "flex flex-col justify-center items-center rounded-2xl w-full mb-8 h-30"
        }
      >
        <button
          className={
            "flex justify-center items-center border-2 border-gray-200 rounded-2xl bg-gray-100 w-80 h-10"
          }
          onClick={toggleDropDownHandler}
          ref={photoSelect}
        >
          <p>{photoType}</p>
        </button>
      </article>
      <CustomDropDown
        position={photoSelectPosition || nullPosition}
        show={toggleDropDown}
        options={PHOTO_OPTIONS}
        toggleDropdown={toggleDropDownHandler}
        setState={setPhotoType}
      />
      <Title name="가격대" bold={true} />
      <Slider
        aria-label="Custom marks"
        defaultValue={500000}
        getAriaValueText={getCostValueText}
        step={5000}
        max={150000}
        valueLabelDisplay="auto"
        marks={costMarks}
      />

      <Title name="해쉬태그" bold={true} />
      {/* 선택된 해쉬태그 */}
      <div className="flex w-full h-auto py-2">
        <HashTag name="단아한" />
      </div>
      <Title name="추천 해쉬태그" bold={false} />
      <div className="flex w-full h-40 p-4 bg-gray-100 rounded-xl border-2 border-gray-200"></div>
      <div className="flex justify-center w-full">
        <button
          className="flex justify-center items-center border-2 rounded-2xl bg-gray-100 mt-4 w-48 h-10 "
          onClick={searchByFilter}
        >
          <p>검색하기</p>
        </button>
      </div>
    </Layout>
  );
};

export default FilterModal;
