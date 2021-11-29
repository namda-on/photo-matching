import React, { FC } from "react";

export interface CardInfo {
  id: number;
  studioName: string;
  section: number;
  img?: any;
  imgDescription?: string;
  review: number; //5점만점에
  price: number;
}

interface CardProps {
  cardInfo: CardInfo;
}

const Card = ({ cardInfo }: CardProps) => {
  const { studioName, img, imgDescription, review, price } = cardInfo;
  return (
    <li className="w-48 h-50">
      <button className="flex flex-col border-2 rounded-2xl py-2 px-3">
        <div className="flex justify-center">
          <img
            className="w-32 h-32 rounded-xl"
            src={img}
            alt={imgDescription}
          />
        </div>
        {/* text Container  */}
        <div className="flex flex-col justify-between items-center mt-2">
          <div className="flex justify-start items-start text-sm">
            {studioName}
          </div>
          <div className="flex justify-start items-start text-xs">
            {price} 원{" "}
          </div>
          <div className="flex justify-start items-center text-xs">
            <img
              className="w-2 h-2 mr-1"
              src="https://cdn-icons-png.flaticon.com/512/1828/1828884.png"
              alt="star"
            />
            <div className="flex justify-center items-center text-xs">
              {review} / 5
            </div>
          </div>
        </div>
      </button>
    </li>
  );
};

export default Card;
