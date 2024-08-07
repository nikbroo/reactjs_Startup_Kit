import { Field } from "formik";
import React, { useState } from "react";
import OpenEyeSvg from "../../assets/svg/OpenEyeSvg";
import CloseEyeSvg from "../../assets/svg/CloseEyeSvg";

interface propsType {
  labelName: string;
  name: string;
  type: string;
  placeholder: string;
  value: string;
  fieldDisable?: boolean;
  errors: any;
  touched: any;
}

const InputField: React.FC<propsType> = ({
  labelName,
  name,
  placeholder,
  type,
  value,
  fieldDisable = false,
  errors,
  touched,
}) => {
  const [isShow, setIsShow] = useState(false);
  return (
    <div className="flex flex-col w-full gap-1 relative">
      {labelName && (
        <label className="font-text text-[#101319] font-bold" htmlFor={name}>
          {labelName}
        </label>
      )}
      <div className="relative">
        <Field
          className={
            "font-text border-b-[0.5px] border-solid border-[#2A2A2A] w-full px-2 py-1 text-[14px] focus:outline-none"
          }
          type={type === "password" ? (isShow ? "text" : type) : type}
          placeholder={placeholder}
          name={name}
          id={name}
          value={value}
          disabled={fieldDisable}
        />

        {type === "password" && (
          <div
            className="absolute flex items-center top-0 h-full right-5 z-10"
            onClick={() => !fieldDisable && setIsShow(!isShow)}
          >
            {isShow ? (
              <OpenEyeSvg className="cursor-pointer" />
            ) : (
              <CloseEyeSvg className="cursor-pointer" />
            )}
          </div>
        )}

        <div className="text-[#FF5050] text-xs absolute capitalize font-medium pt-1">
          {errors && touched && typeof errors === "string" && errors}
        </div>
      </div>
    </div>
  );
};

export default InputField;
