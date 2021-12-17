import React, { useEffect, useRef, useState } from "react";
import CustomDropDown from "../../../shared/components/dropdown";
import Title from "./title";
import Layout from "../../../shared/layout";
import { DropDownOption } from "../../../shared/types";
import HashTag from "../../../shared/components/hashtag";
import Slider from "@mui/material/Slider";
import { HashTags } from "../hashTags";
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
  return `${formattedCost}`;
};

const costMarks = [
  { value: 20000, label: getCostValueText(20000) },
  { value: 50000, label: getCostValueText(50000) },
  { value: 100000, label: getCostValueText(100000) },
];

const FilterModal = ({ toggleModal }: FilterPageProps) => {
  const [toggleDropDown, setToggleDropDown] = useState(false);
  const [photoType, setPhotoType] = useState<PhotoType>(PhotoType.사진종류);
  const [costValue, setCostValue] = useState([0, 50000]);
  const [selectedHashtag, setSelectedHashtag] = useState<string[]>([]);
  const [candidateHashtag, setCandidateHashtag] = useState<string[]>(HashTags);
  const [warning, setWarning] = useState<boolean>(false);

  const photoSelect = useRef<HTMLButtonElement>(null);
  const searchByFilter = () => {
    toggleModal();
  };

  const handleCostSlideChange = (event: Event, newValue: number | number[]) => {
    setCostValue(newValue as number[]);
  };

  const toggleDropDownHandler = () => {
    setToggleDropDown((prevStatus) => !prevStatus);
  };

  useEffect(() => {}, [costValue]);

  const photoSelectPosition = photoSelect.current?.getBoundingClientRect();

  const addToSelectHashtag = (hashtagName: string) => {
    if (selectedHashtag.length >= 3) {
      setWarning(true);
      return;
    }
    setSelectedHashtag((prev) => [...prev, hashtagName]);
    setCandidateHashtag((candidateHashtags) => {
      return candidateHashtags.filter((hashTag) => hashTag !== hashtagName);
    });
  };

  const cancelSelect = (hashtagName: string) => {
    setSelectedHashtag((prev) => {
      return prev.filter((hashTag) => hashTag !== hashtagName);
    });
    setCandidateHashtag((prev) => [...prev, hashtagName]);
  };

  useEffect(() => {
    if (warning) {
      setTimeout(() => {
        setWarning(false);
      }, 1000);
    }
  }, [warning]);

  return (
    <Layout relative={true}>
      <section className="flex w-full h-4 justify-end mt-2 mb-2">
        <button className="text-xl mr-2" onClick={toggleModal}>
          X
        </button>
      </section>
      <div className="flex flex-col px-4 w-full">
        <Title name="사진종류" bold={true} />
        <div className="flex justify-center">
          <article
            className={
              "flex justify-center items-center rounded-2xl w-64 mb-2 h-30"
            }
          >
            <button
              className={
                "border-2 border-gray-200 rounded-2xl bg-gray-100 w-full h-10"
              }
              onClick={toggleDropDownHandler}
              ref={photoSelect}
            >
              <p>{photoType}</p>
            </button>
          </article>
        </div>
        <CustomDropDown
          position={photoSelectPosition || nullPosition}
          show={toggleDropDown}
          options={PHOTO_OPTIONS}
          toggleDropdown={toggleDropDownHandler}
          setState={setPhotoType}
        />
        <Title name="가격대" bold={true} />
        <Slider
          defaultValue={50000}
          getAriaValueText={getCostValueText}
          onChange={handleCostSlideChange}
          step={5000}
          max={180000}
          value={costValue}
          valueLabelDisplay="auto"
          marks={costMarks}
          color="secondary"
        />

        <Title name="해시태그" bold={true} />
        {/* 선택된 해시태그 */}
        <div className="flex w-full h-auto py-2">
          {selectedHashtag.length === 0 ? (
            <p className="h-6 text-sm">해시태그를 선택해주세요 </p>
          ) : (
            selectedHashtag.map((hashTag) => (
              <HashTag
                key={`tag${hashTag}`}
                name={hashTag}
                onClick={() => {
                  cancelSelect(hashTag);
                }}
              />
            ))
          )}
        </div>
        <div className="flex ">
          <Title name="추천 해시태그" bold={false} smallSpace={true} />
          {warning ? (
            <div className="flex items-center h-full">
              <div className="ml-2 text-xs text-yellow-700 ">
                해시태그는 최대 3개까지 선택할 수 있습니다{" "}
              </div>
            </div>
          ) : (
            <></>
          )}
        </div>

        <div className="flex flex-wrap w-full h-40 p-4 bg-gray-100 rounded-xl border-2 border-gray-200">
          {candidateHashtag.map((hashTag) => (
            <HashTag
              key={`tag${hashTag}`}
              name={hashTag}
              onClick={() => {
                addToSelectHashtag(hashTag);
              }}
            />
          ))}
        </div>
        <div className="flex justify-center w-full">
          <button
            className="flex justify-center items-center border-2 rounded-2xl bg-gray-100 mt-4 w-48 h-10 "
            onClick={searchByFilter}
          >
            <p>검색하기</p>
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default FilterModal;
