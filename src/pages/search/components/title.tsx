import React from "react";

interface TitleProps {
  name: string;
  bold: boolean;
}

const Title = ({ name, bold }: TitleProps) => {
  console.log(bold);
  return (
    <div className="flex w-auto h-10 my-2 items-center justify-start">
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
