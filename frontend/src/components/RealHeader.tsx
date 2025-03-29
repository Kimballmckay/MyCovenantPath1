import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styles from "../pages/Menu/Menu.module.css";

interface MenuHeaderProps {
  title?: string; // Optional prop to override the title
}

const MenuHeader: React.FC<MenuHeaderProps> = ({ title }) => {
  const location = useLocation();
  const navigate = useNavigate();
  
  // Determine the page title based on the current path
  const getPageTitle = () => {
    if (title) return title; // Use provided title if available
    
    const path = location.pathname;
    if (path === '/path') return 'Path';
    if (path === '/MyProgress.tsx' || path === '/progress') return 'Progress';
    if (path === '/GoalsPlans' || path === '/goals') return 'Goals';
    if (path === '/study') return 'Study';
    if (path === '/Menu' || path === '/menu') return 'Menu';
    
    return 'Menu'; // Default fallback
  };
  
  const handleBackClick = () => {
    navigate(-1); // Go back to previous page
  };

  return (
    <section className={styles.div}>
      <button 
        className={styles.iconbuttontoggleable}
        onClick={handleBackClick}
      >
        <div className={styles.container}>
          <div className={styles.stateLayer}>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/b88e52832bdf5fa7ada12911336e0d4d27f10cdb04410ced563f8049909a6cf8?placeholderIfAbsent=true&apiKey=3fb7e4d952c749b1b4b816af6fe83375"
              className={styles.img3}
              alt="Back button"
            />
          </div>
        </div>
      </button>
      
      <h1 className={styles.pageName}>{getPageTitle()}</h1>
      
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/fcb595c01eea3ae1e6978bd4cb7de58b1b6093a9f41930bc01fe2c32f3e3bad5?placeholderIfAbsent=true&apiKey=3fb7e4d952c749b1b4b816af6fe83375"
        className={styles.img4}
        alt="User profile"
      />
    </section>
  );
};

export default MenuHeader;