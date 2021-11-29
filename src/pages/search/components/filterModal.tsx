import React, { useRef, useState } from "react";
import CustomDropDown from "../../../shared/components/dropdown";
import Title from "./title";
import Layout from "../../../shared/layout";
import { DropDownOption } from "../../../shared/types";

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
      <Title name="사진종류" />
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
      <Title name="가격대" />

      <Title name="해쉬태그" />

      <div className="flex justify-center w-full">
        <button
          className="flex justify-center items-center border-4 rounded-2xl bg-gray-100 mt-4 w-48 h-10"
          onClick={searchByFilter}
        >
          <p>검색하기</p>
        </button>
      </div>
    </Layout>
  );
};

export default FilterModal;
