import React, { memo } from "react";
import icons from "../utils/icons";
let { AiOutlineEye, AiOutlineEyeInvisible } = icons;
const InputForm = ({
  label,
  type,
  id,
  Icons,
  isPass = false,
  IconEye = "",
  IconEyeInvisible = "",
  value,
  setValue,
  invalidFields,
  setInvalidFields
}) => {
  console.log("check isPass", isPass);
  const [showPass, setShowPass] = React.useState(false);
  let isShowPass = () => {};
  return (
    <div className="relative">
      {isPass === true ? (
        <>
          <Icons className="absolute left-3 top-3 text-2xl" />
          <input
            onFocus={() => setInvalidFields([])}
            value={value}
            onChange={(e) =>
              setValue((prev) => ({ ...prev, [id]: e.target.value }))
            }
            type={type || 'text'}
            id={id}
            className="outline-none bg-[#ffffff] w-full rounded-lg border border-gray-400 focus:border-black py-[13px] pr-[43px] pl-[43px]"
            placeholder={label}
          />
          <AiOutlineEye
            className="absolute right-3 top-3 text-2xl"
            onClick={isShowPass}
          />
          {invalidFields.length > 0 &&
            invalidFields.some((i) => i.name === id) && (
              <small className="text-red-500 italic">
                {invalidFields.find((i) => i.name === id)?.message}
              </small>
            )}
        </>
      ) : (
        <>
          <Icons className="absolute left-3 top-3 text-2xl" />
          <input
            onFocus={() => setInvalidFields([])}

            value={value}
            onChange={(e) =>
              setValue((prev) => ({ ...prev, [id]: e.target.value }))
            }
            type={type || 'text'}
            id={id}
            className="outline-none bg-[#ffffff] w-full rounded-lg border border-gray-400 focus:border-black py-[13px] pr-[12px] pl-[43px]"
            placeholder={label}
          />
          {invalidFields.length > 0 &&
            invalidFields.some((i) => i.name === id) && (
              <small className="text-red-500 italic">
                {invalidFields.find((i) => i.name === id)?.message}
              </small>
            )}
        </>
      )}
    </div>
  );
};

export default memo(InputForm);
