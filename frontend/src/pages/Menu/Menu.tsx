import { useNavigate } from 'react-router-dom'; // Import the useNavigate hook
import styles from './Menu.module.css';
import StatusBar from '../../components/StatusBar.tsx';
import MenuHeader from '../../components/RealHeader.tsx';
import MenuButton from './MenuButton.tsx';
import NavigationBar from '../../components/NavigationBar.tsx';

function Menu() {
  const navigate = useNavigate(); // Initialize useNavigate hook

  // Handler function to navigate to different routes
  const handleNavigate = (path: string) => {
    navigate(path); // Navigate to the given path
  };

  return (
    <main className={styles.menu}>
      <div className={styles.menuComponents}>
        <StatusBar />
        <MenuHeader pageName='Menu'/>

        <MenuButton 
          text="My Covenant Path" 
          className={styles.myCovenantPath} 
          onClick={() => handleNavigate('/MyCovenantPath')} // Add onClick handler for navigation
        />
        <MenuButton 
          text="My Progress" 
          className={styles.myProgress} 
          onClick={() => handleNavigate('/MyProgress')} 
        />
        <MenuButton 
          text="My Goals & Plans" 
          className={styles.myGoalsPlans} 
          onClick={() => handleNavigate('/GoalsPlans')} 
        />
        <MenuButton 
          text="My Studies" 
          className={styles.myStudies} 
          onClick={() => handleNavigate('/MyStudies')} 
        />
      </div>
      <NavigationBar />
    </main>
  );
}

export default Menu;
