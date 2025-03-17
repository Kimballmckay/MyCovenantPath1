import React from 'react';
import styles from './Menu.module.css'

interface MenuButtonProps {
  text: string;
  className?: string;
  onClick?: () => void;
}

const MenuButton: React.FC<MenuButtonProps> = ({ text, className = '', onClick }) => {
  return (
    <button 
      className={className} // Remove the menuButton class to preserve original styling
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default MenuButton;