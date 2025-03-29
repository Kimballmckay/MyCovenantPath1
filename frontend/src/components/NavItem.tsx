import React from 'react';
import styles from '../pages/Menu/Menu.module.css'; // Adjust the path as needed

interface NavItemProps {
  iconSrc: string;
  label: string;
  isActive: boolean;
  containerClassName: string;
  stateLayerClassName: string;
  navItemClassName: string;
  onClick?: () => void; // Add onClick prop to make it interactive
}

const NavItem: React.FC<NavItemProps> = ({
  iconSrc,
  label,
  isActive, // Now using the isActive prop
  containerClassName,
  stateLayerClassName,
  navItemClassName,
  onClick,
}) => {
  return (
    <div
      className={`${navItemClassName} ${isActive ? styles.activeNavItem : ''}`}
      onClick={onClick}
      role="button"
      tabIndex={0}
      aria-current={isActive ? 'page' : undefined}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          onClick && onClick();
        }
      }}
    >
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
