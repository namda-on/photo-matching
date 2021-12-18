import React from "react";

interface TitleProps {
  name: string;
  bold: boolean;
  smallSpace?: boolean;
}

const Title = ({ name, bold, smallSpace }: TitleProps) => {
  return (
    <div
      className={
        smallSpace
          ? "flex w-auto h-8 mt-1 mr-2 items-center justify-start"
          : "flex w-auto h-10 my-2 items-center justify-start"
      }
    >
      <div
        className={"w-15 h-8 text-2xl" + bold ? "font-medium" : "font-medium"}
      >
        {" "}
        {name}
      </div>
    </div>
  );
};

export default Title;
