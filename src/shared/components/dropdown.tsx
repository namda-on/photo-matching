import React from "react";
import { DropDownOption } from "../types";

interface DropDownProps {
  position: {
    x: number;
    y: number;
    height: number;
  };
  show: boolean;
  options: DropDownOption[];
  setState: any;
  toggleDropdown: () => void;
}

//px -> rem
const calPxToRem = (px: number) => {
  const REM = 16;
  return px / REM;
};

const CustomDropDown = ({
  show,
  options,
  position,
  toggleDropdown,
  setState,
}: DropDownProps) => {
  const positionX = position.x as number;
  const positionY = position.y + position.height + 10;

  //const positionX = calPxToRem(position?.x as number);
  //const positionY = calPxToRem(position.y + position.height) + 0.5;

  // const positionStyle = {
  //   left: `${positionX}rem`,
  //   top: `${positionY}rem`,
  // };

  const setDropdownValue = (value: any) => {
    setState(value);
    toggleDropdown();
  };
  //
  const className = `flex justify-center w-64 h-auto bg-gray-100 border-2 border-gray-200 rounded-2xl overflow-hidden z-10 `;

  return show ? (
    <div className={className}>
      <section className="flex flex-col w-full h-full">
        {options.map((option, idx) => {
          return (
            <button
              key={`photoType${option.optionName}`}
              className={`flex cursor-pointer align-middle justify-center h-auto w-full py-2 border-solid border-gray-200 hover:bg-white	${
                idx === options.length - 1 ? "" : "border-b-2"
              }`}
              onClick={() => {
                setDropdownValue(option.id);
              }}
            >
              {option.optionName}
            </button>
          );
        })}
      </section>
    </div>
  ) : (
    <></>
  );
};

export default CustomDropDown;
