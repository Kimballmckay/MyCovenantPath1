import React from 'react';
import styles from './Menu.module.css';

interface NavItemProps {
  iconSrc: string;
  label: string;
  isActive: boolean;
  containerClassName: string;
  stateLayerClassName: string;
  navItemClassName: string;
}

const NavItem: React.FC<NavItemProps> = ({
  iconSrc,
  label,
  isActive,
  containerClassName,
  stateLayerClassName,
  navItemClassName,
}) => {
  return (
    <div className={navItemClassName}>
      <div className={containerClassName}>
        <div className={stateLayerClassName}>
          <img src={iconSrc} className={styles.img5} alt={`${label} icon`} />
        </div>
      </div>
      <div className={styles.labelText}>{label}</div>
    </div>
  );
};

export default NavItem;
