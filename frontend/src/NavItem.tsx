import React from "react";
import styles from "./assets/styles/styles.module.css";

interface NavItemProps {
  label: string;
  iconSrc: string;
  isActive?: boolean;
  onClick?: () => void;
}

const NavItem: React.FC<NavItemProps> = ({
  label,
  iconSrc,
  isActive = false,
  onClick,
}) => {
  return (
    <button className={styles.navItem} onClick={onClick}>
      <div
        className={
          isActive ? styles.navIconContainer : styles.navIconContainer2
        }
      >
        <div
          className={
            isActive
              ? styles.navStateLayer3
              : isActive === false
                ? styles.navStateLayer2
                : styles.navStateLayer
          }
        >
          <img src={iconSrc} alt={label} className={styles.navIcon} />
        </div>
      </div>
      <span className={styles.navLabel}>{label}</span>
    </button>
  );
};

export default NavItem;
