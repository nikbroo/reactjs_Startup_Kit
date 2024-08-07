import { SVGProps } from "react";
const OpenEyeSvg = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={21}
    height={14}
    fill="none"
    {...props}
  >
    <path
      fill="#000"
      d="M10.5 4.2c-.76 0-1.488.295-2.025.82A2.769 2.769 0 0 0 7.636 7c0 .743.302 1.455.84 1.98.536.525 1.265.82 2.024.82.76 0 1.488-.295 2.025-.82A2.769 2.769 0 0 0 13.364 7c0-.743-.302-1.455-.84-1.98A2.897 2.897 0 0 0 10.5 4.2Zm0 7.467A4.828 4.828 0 0 1 7.125 10.3 4.615 4.615 0 0 1 5.727 7c0-1.238.503-2.425 1.398-3.3A4.828 4.828 0 0 1 10.5 2.333c1.266 0 2.48.492 3.375 1.367A4.615 4.615 0 0 1 15.273 7a4.614 4.614 0 0 1-1.398 3.3 4.828 4.828 0 0 1-3.375 1.367ZM10.5 0C5.727 0 1.651 2.903 0 7c1.651 4.097 5.727 7 10.5 7s8.849-2.903 10.5-7c-1.651-4.097-5.727-7-10.5-7Z"
    />
  </svg>
);
export default OpenEyeSvg;