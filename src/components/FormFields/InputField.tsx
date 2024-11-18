import React, { useState } from "react";
import { Field } from "formik";
import OpenEyeSvg from "../../assets/svg/OpenEyeSvg";
import CloseEyeSvg from "../../assets/svg/CloseEyeSvg";
import PhoneInput from "react-phone-input-2";
import UploadBG from "../../assets/svg/UploadBG";
import "react-phone-input-2/lib/style.css";
import { useAppDispatch } from "../../Store/Hooks";
import { uploadImage } from "../../Features/userSlice";

interface FieldPropsType {
  labelName?: string;
  labelWidth?: string;
  labelClass?: string;
  className?: string;
  name?: string;
  extName?: string;
  placeholder?: string;
  value?: string;
  options?: any;
  errors?: any;
  touched?: any;
  onBlur?: any;
  onChange?: any;
  setFieldValue?: any;
  fieldDisable?: boolean;
  type?: any;
  icon?: any;
}
const InputField: React.FC<FieldPropsType> = ({
  labelName,
  labelWidth,
  labelClass,
  className,
  placeholder,
  errors,
  touched,
  onBlur,
  onChange,
  setFieldValue,
  fieldDisable = false,
  value,
  options,
  extName,
  name,
  type,
  icon,
}) => {
  const dispatch = useAppDispatch();
  const [isShow, setIsShow] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]; // Get the selected file
    if (file) {
      const formData = new FormData();
      formData.append("image", file);

      setLoading(true);
      dispatch(uploadImage(formData))
        .unwrap()
        .then((res) => {
          setLoading(false);
          if (res?.status) {
            setFieldValue(name, res?.imageUrl); // Set the image source to display
          } else {
            console.log(res?.msg, "========upload error");
          }
        })
        .catch((error) => {
          console.log(error, "========upload error");
          setLoading(false);
        });

      // const reader = new FileReader();
      // reader.onload = (e) => {
      //   setFieldValue(name, e.target?.result as string); // Set the image source to display
      // };
      // reader.readAsDataURL(file); // Convert the file to a data URL for preview
    }
  };

  return (
    <div className="flex gap-5">
      {labelName && (
        <p
          className={`text-[14px] font-medium pt-2 ${labelClass}`}
          style={{ width: `${labelWidth + "px"}` }}
        >
          {labelName}
        </p>
      )}
      <div
        className={`w-full flex gap-5 bg-[white] items-center justify-between py-[5px] px-5 pr-2 rounded-lg border border-[#AAAAAA] 
          ${errors && touched && "border-red-600"}
          ${type === "file" && "py-0 px-0 pl-0 border-0"}
          ${className}
          `}
        style={{ width: `calc(100% - ${Number(labelWidth) + 20 + "px"})` }}
      >
        <div className="w-full flex gap-2 items-center">
          {icon && <div>{icon}</div>}
          {type === "phone" ? (
            <PhoneInput
              country={"in"}
              value={value}
              alwaysDefaultMask={false}
              placeholder={placeholder}
              prefix={"+"}
              containerClass={"w-full focus:outline-none font-text font-medium h-[20px]"}
              buttonStyle={{
                border: "none",
                background: "transparent",
              }}
              inputStyle={{
                border: "none",
                height: "16px",
                width: "100%",
                color: fieldDisable ? "#9ca3af" : "black",
              }}
              inputProps={{
                name: name,
                onBlur: onBlur,
                required: true,
                disabled: fieldDisable,
              }}
              onChange={(phone, country: any) => {
                setFieldValue(
                  name,
                  Number(
                    country?.dialCode + phone?.slice(country?.dialCode?.length)
                  )
                );
                // setFieldValue(extName, "+" + country?.dialCode);
              }}
            />
          ) : type === "select" ? (
            <Field
              as={type}
              className={`w-full focus:outline-none font-text font-medium capitalize ${
                !value && "text-[#9ca3af]"
              } ${fieldDisable && "text-[#9ca3af] cursor-not-allowed"}`}
              name={name}
              placeholder={placeholder}
              value={value}
              disabled={fieldDisable}
            >
              <option className="text-[#9ca3af] capitalize" value="">
                {placeholder}
              </option>
              {options?.map((item: any, index: number) => (
                <option
                  key={index}
                  className="text-black capitalize"
                  value={item?.value}
                >
                  {item?.label}
                </option>
              ))}
            </Field>
          ) : type === "file" ? (
            <div className="relative w-[60%] h-[140px] border border-[#AAAAAA] rounded-lg flex items-center justify-center">
              <input
                type={type}
                className="w-full absolute h-full z-10 top-0 left-0 opacity-0 cursor-pointer"
                accept="image/*"
                onChange={handleFileChange}
                disabled={fieldDisable}
              />

              {value ? (
                <img
                  src={value}
                  alt={name}
                  className="w-full h-full object-contain"
                />
              ) : (
                <UploadBG />
              )}
            </div>
          ) : (
            <Field
              component={type === "textarea" ? "textarea" : "input"}
              type={type === "password" ? (isShow ? "text" : type) : type}
              className={`w-full focus:outline-none font-text font-medium bg-transparent ${
                !value && "text-[#9ca3af]"
              } ${fieldDisable && "text-[#9ca3af] cursor-not-allowed"}`}
              name={name}
              placeholder={placeholder}
              value={value}
              onKeyUp={onChange && onChange}
              disabled={fieldDisable}
            />
          )}
        </div>
        {type === "password" && (
          <div
            className="cursor-pointer scale-75"
            onClick={() => !fieldDisable && setIsShow(!isShow)}
          >
            {isShow ? <OpenEyeSvg /> : <CloseEyeSvg />}
          </div>
        )}

        {/* <div className="text-[#FF5050] text-xs absolute capitalize font-medium pt-1">
        {errors && touched && typeof errors === "string" && errors}
      </div> */}
      </div>
    </div>
  );
};

export default InputField;
