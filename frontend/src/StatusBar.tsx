import React from 'react';
import styles from './Menu.module.css';

const StatusBar: React.FC = () => {
  return (
    <header className={styles.statusBarIPhone}>
      <div className={styles.frame}>
        <time className={styles.time}>9:41</time>
        <div className={styles.dynamicIslandspacer} />
        <div className={styles.levels}>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/dccdd1fa50a4d57f080d11fee0f8b90cee5760c26223c236779841f6df9b49ec?placeholderIfAbsent=true&apiKey=3fb7e4d952c749b1b4b816af6fe83375"
            className={styles.img}
            alt="Signal strength indicator"
          />
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/4944cd2bbdaf01b0ec100c422c2cc1b718a3fecb129227a6b0a2cf717155cf82?placeholderIfAbsent=true&apiKey=3fb7e4d952c749b1b4b816af6fe83375"
            className={styles.img2}
            alt="Battery level indicator"
          />
        </div>
      </div>
    </header>
  );
};

export default StatusBar;
