import React from "react";

interface HashtagProps {
  name: string;
  color?: string;
  small?: boolean;
  onClick?: () => void;
}

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

const HashTag = ({ name, color, onClick, small }: HashtagProps) => {
  const hashTagStyle: React.CSSProperties = {
    backgroundColor: color ? color : "#FBEAEB",
    color: color ? getTextColor(color) : "#2E3C7E",
  };

  return (
    <div
      className={
        small
          ? "flex items-center justify-center w-auto h-4 px-2 py-1 rounded-xl cursor-pointer text-xs mr-1 border-hashtag"
          : "flex items-center justify-center w-auto h-6 px-3 py-1 rounded-xl cursor-pointer text-sm mr-5 border-hashtag"
      }
      style={hashTagStyle}
      onClick={onClick ? onClick : undefined}
    >
      {name}
    </div>
  );
};

export default HashTag;
