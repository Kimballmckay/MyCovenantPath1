'use client';
import * as React from 'react';

const StatusBar: React.FC = () => {
   // Get current time in HH:MM format
    const getTime = () => {
      const now = new Date();
      return now.toLocaleTimeString('en-US', { 
          hour: '2-digit', 
          minute: '2-digit',
          hour12: true 
      });
  };

  return (
    <header className={styles.statusBarIPhone}>
      <div className={styles.frame}>
        <time className={styles.time}>{getTime()}</time>
        <div className={styles.dynamicIslandspacer} />
        <div className={styles.levels}>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/9de4f2be8a72efc687cb42efd07645ff24113d9d?placeholderIfAbsent=true&apiKey=67d06c088f3849ce8c0f6314319fc847"
            className="object-contain shrink-0 self-stretch my-auto aspect-[1.58] w-[19px]"
            alt="Signal strength"
          />
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/3f50797c862f1d94f13f819ef78646406ad340be?placeholderIfAbsent=true&apiKey=67d06c088f3849ce8c0f6314319fc847"
            className="object-contain shrink-0 self-stretch my-auto aspect-[1.42] w-[17px]"
            alt="Battery level"
          />
        </div>
      </div>
    </header>
  );
};
