import React from "react";

interface HashtagProps {
  name: string;
  color?: string;
}

const isValidColor = (color: string) => {
  const reg = /^#[0-9A-F]{6}$/i;
  const result = reg.exec(color);
  if (result === null) return false;
  return true;
};

const getRandomColor = (): any => {
  const color = `#${Math.round(Math.random() * 0xffffff).toString(16)}`;
  const isValid = isValidColor(color);
  if (isValid) return color;
  return getRandomColor();
};

const hexToRgb = (hex: string): any => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null;
};

const getTextColor = (hexCode: string) => {
  const RGBColor = hexToRgb(hexCode);
  const brightness = Math.round(
    (parseInt(RGBColor.r) * 299 +
      parseInt(RGBColor.g) * 587 +
      parseInt(RGBColor.b) * 114) /
      1000
  );
  const textColor = brightness > 125 ? "black" : "white";
  return textColor;
};

const HashTag = ({ name, color }: HashtagProps) => {
  const hashTagStyle: React.CSSProperties = {
    backgroundColor: color ? color : "#FBEAEB",
    color: color ? getTextColor(color) : "#2E3C7E",
  };

  return (
    <div
      className={
        "flex items-center justify-center w-auto h-6 px-3 py-1 rounded-xl cursor-pointer text-sm mr-5 border-[1px]"
      }
      style={hashTagStyle}
    >
      {name}
    </div>
  );
};

export default HashTag;
