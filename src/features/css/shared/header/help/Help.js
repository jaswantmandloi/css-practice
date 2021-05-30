import { useRef } from "react";
import useTogger from "features/css/shared/hooks/useToggle";
import styles from "./Help.module.scss";
import positionElement from "position-element";

export default function Index() {
  const { isOpen, changeToggle } = useTogger(false);

  const helpRef = useRef(null);

  const handleToggle = function (event) {
    const { target } = event;
    changeToggle();
    const config = {
      element: helpRef.current,
      anchorElement: target,
      preferredPlacement: "down-left",
      distance: 1,
      alignmentOffset: 0,
      autoReposition: true,
    };

    positionElement(config);
  };

  return (
    <>
      <button onClick={handleToggle} className={isOpen ? styles.active : ""}>
        <img src="/css/index/connect@1x.png" />
        <span>Help</span>
      </button>
      <div
        className={`${styles.help} ${isOpen ? styles.active : ""}`}
        ref={helpRef}
      >
        <ul>
          {["Contact Us", "Help Center", "Recall Information"].map(
            (item, index) => {
              return <li key={index}>{item}</li>;
            }
          )}
        </ul>
      </div>
    </>
  );
}
