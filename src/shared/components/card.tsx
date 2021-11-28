import React, { FC } from "react";

export interface CardInfo {
  studioName: string;
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
    <li>
      <div className="flex flex-col border-2 rounded-2xl">
        <div className="flex justify-center">
          <img
            className="w-32 h-32 rounded-xl"
            src={img}
            alt={imgDescription}
          />
        </div>
        {/* text Container  */}
        <div className="flex flex-col justify-between items-center">
          <div className="flex justify-center items-center">{studioName} </div>
          <div className="flex justify-center items-center">{price} 원 </div>
          <div className="flex justify-center items-center">{review} / 5</div>
        </div>
      </div>
    </li>
  );
};

export default Card;
