'use client';

import React from 'react';
import styles from './InputDesign.module.css';
import StatusBar from '../../components/StatusBar';
import SignInForm from './SignInForm';

const InputDesign: React.FC = () => {
  return (
    <main className={styles.container}>
      <div className={styles.wrapper}>
        <StatusBar />
        <section className={styles.mainContent}>
          <h1 className={styles.title}>My Covenant Path</h1>
          <div className={styles.contentWrapper}>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/418037d45c9775690419343ff3e5c39d8e06e0cc"
              alt="Church Logo"
              className="w-[136px] h-[269px] object-contain"
            />
            <SignInForm />
          </div>
        </section>
      </div>
    </main>
  );
};

export default InputDesign;
