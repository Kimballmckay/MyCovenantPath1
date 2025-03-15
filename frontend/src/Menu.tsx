'use client';
import * as React from 'react';
import styles from './Menu.module.css';
import StatusBar from './StatusBar';
import MenuHeader from './MenuHeader';
import MenuButton from './MenuButton';
import NavigationBar from './NavigationBar';

function Menu() {
  return (
    <main className={styles.menu}>
      <div className={styles.menuComponents}>
        <StatusBar />
        <MenuHeader />

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
