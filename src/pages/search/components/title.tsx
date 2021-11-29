import React from "react";

interface TitleProps {
  name: string;
}

const Title = ({ name }: TitleProps) => {
  return (
    <div className="flex w-20 h-10 my-2 items-center justify-start">
      <div className="w-15 h-8"> {name}</div>
    </div>
  );
};

export default Title;
