import useTogger from "features/css/shared/hooks/useToggle";
import { useState } from "react";
import styles from "./MyAccount.module.scss";

export default function Index() {
  const { isOpen, changeToggle } = useTogger(false);
  const [activeMenu, setActiveMenu] = useState(() => {
    const [{ label }] = menuItems;
    return label;
  });

  const handleToggle = function () {
    changeToggle();
  };

  const handleActiveMenu = function (menuItem) {
    setActiveMenu(menuItem);
  };

  const [{ items: secondaryMenus = [] }] = menuItems.filter(({ label }) => {
    return activeMenu === label;
  });

  return (
    <>
      <button onClick={handleToggle} className={styles.button}>
        <img src="/css/index/account.png" />
        <span>My Account</span>
        <div className={`${styles.myAccount} ${isOpen ? styles.active : ""}`}>
          <div className={styles.header}>
            <div>
              <div>Hello Test User</div>
              <div>Test Account (123456)</div>
            </div>
            <div>Close</div>
          </div>
          <div className={styles.body}>
            <div className={styles.primaryPanel}>
              <ul>
                {menuItems.map(({ label }) => {
                  return (
                    <li
                      key={label}
                      onClick={() => {
                        handleActiveMenu(label);
                      }}
                    >
                      {label}
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className={styles.secondaryPanel}>
              <ul>
                {secondaryMenus.map(({ label }) => {
                  return <li key={label}>{label}</li>;
                })}
              </ul>
            </div>
          </div>
        </div>
      </button>
    </>
  );
}

const menuItems = [
  {
    label: "Shopping",
    items: [
      { label: "Cart" },
      { label: "Rebates & Offers" },
      { label: "Shopping List" },
      { label: "Flyers" },
    ],
  },
  {
    label: "Orders",
    items: [
      { label: "Group Orders" },
      { label: "Submitted Orders" },
      { label: "Back Orders" },
      { label: "Special Orders" },
      { label: "Templates" },
      { label: "Returns" },
    ],
  },
];
