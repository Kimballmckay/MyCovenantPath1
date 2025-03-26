import styles from './Menu.module.css';
import StatusBar from '../../components/StatusBar.tsx';
import MenuHeader from '../../components/RealHeader.tsx';
import MenuButton from './MenuButton.tsx';
import NavigationBar from '../../components/NavigationBar.tsx';

function Menu() {
  return (
    <main className={styles.menu}>
      <div className={styles.menuComponents}>
        <StatusBar />
        <MenuHeader pageName='Menu'/>

        <MenuButton text="My Covenant Path" className={styles.myCovenantPath} />
        <MenuButton text="My Progress" className={styles.myProgress} />
        <MenuButton text="My Goals & Plans" className={styles.myGoalsPlans} />
        <MenuButton text="My Studies" className={styles.myStudies} />
      </div>
      <NavigationBar />
    </main>
  );
}

export default Menu;
