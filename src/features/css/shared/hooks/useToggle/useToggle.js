import { useState } from "react";

export default function useTogger() {
  const [toggle, setToggler] = useState(false);

  function changeToggle() {
    setToggler(!toggle);
  }

  return {
    isOpen: toggle,
    changeToggle,
  };
}
