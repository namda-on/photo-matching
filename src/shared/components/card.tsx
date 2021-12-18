import React, { FC } from "react";
import HashTag from "./hashtag";

export interface CardInfo {
  id: number;
  studioName: string;
  address: string;
  section: number;
  img?: any;
  imgDescription?: string;
  review: number; //5점만점에
  price: number;
  hashTags?: string[];
}

interface CardProps {
  cardInfo: CardInfo;
}

const getPhotoType = (tabId: number) => {
  switch (tabId) {
    case 1:
      return "증명사진";
    case 2:
      return "프로필";
    case 3:
      return "바디 프로필";
    case 4:
      return "스냅샷";
    default:
      return "사진 ";
  }
};

const Card = ({ cardInfo }: CardProps) => {
  const {
    id,
    studioName,
    img,
    imgDescription,
    review,
    address,
    hashTags,
    section,
  } = cardInfo;

  return (
    <li
      className="flex items-center justify-center w-full h-full py-1"
      onClick={() => {
        (window as any).JSBridge?.showMessageInNative(id);
      }}
    >
      <button className="flex flex-col border-2 rounded-2xl py-2 px-[11px] h-full">
        <div className="flex w-auto h-32 max-w-card overflow-hidden justify-center rounded-xl">
          <img className="" src={img} alt={imgDescription} />
        </div>
        {/* text Container  */}
        <div className="flex flex-col justify-between items-start mt-2 w-full">
          <div className="flex justify-between items-start text-sm w-full ">
            <p>{studioName}</p>
            <div className="flex justify-start items-center text-xs">
              <img
                className="w-2 h-2 mr-1"
                src="https://cdn-icons-png.flaticon.com/512/1828/1828884.png"
                alt="star"
              />
              <div className="flex justify-center items-center text-xs">
                {review}
              </div>
            </div>
          </div>
          <div className="flex justify-start items-start text-xs text-[#757575]">
            {address}{" "}
          </div>
          <div className="flex justify-start items-start text-xs text-[#757575]">
            {getPhotoType(section)}{" "}
          </div>
          <div className="flex justify-start items-start text-xs mt-[4px]">
            {hashTags?.map((hashTag) => (
              <HashTag small={true} key={`hash${hashTag}`} name={hashTag} />
            ))}
          </div>
        </div>
      </button>
    </li>
  );
};

export default Card;
