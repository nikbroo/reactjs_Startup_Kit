import { useEffect } from "react";

export function useOutSideCheck(
  ref: any,
  setShow: any,
  show: boolean | string
) {
  useEffect(() => {
    // Alert if clicked on outside of element
    function handleClickOutside(event: { target: any }) {
      if (ref.current && !ref.current.contains(event.target)) {
        //   alert("You clicked outside of me!");
        typeof show === "string" ? setShow("") : setShow(false);
      }
    }
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, setShow]);
}
