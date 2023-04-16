import React, { memo } from "react";

const Button = ({
  text,
  textColor,
  bgColor,
  Icons,
  onClick,
  fullWidth,
  border,
}) => {
 
  return (
    <button
      type="button"
      className={`py-2 px-4 ${textColor} font-semibold text-sm ${border} ${bgColor} ${
        fullWidth && "w-full"
      } outline-none rounded-md flex items-center justify-center gap-1 `}
      onClick={onClick}
    >
      <span>{Icons && <Icons />}</span>
      <span>{text}</span>
    </button>
  );
};

export default memo(Button);
