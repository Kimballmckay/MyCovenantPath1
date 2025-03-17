import React from "react";
import styles from "./assets/styles/styles.module.css";

const StatusBar: React.FC = () => {
  return (
    <header className={styles.statusBarIPhone}>
      <div className={styles.frame}>
        <time className={styles.time}>9:41</time>
        <div className={styles.dynamicIslandspacer} />
        <div className={styles.levels}>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/dccdd1fa50a4d57f080d11fee0f8b90cee5760c26223c236779841f6df9b49ec?placeholderIfAbsent=true&apiKey=3c1836ca9e544bbe8603c758fecc6a89"
            alt="Signal strength"
            className={styles.statusIcon}
          />
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/4944cd2bbdaf01b0ec100c422c2cc1b718a3fecb129227a6b0a2cf717155cf82?placeholderIfAbsent=true&apiKey=3c1836ca9e544bbe8603c758fecc6a89"
            alt="Battery level"
            className={styles.batteryIcon}
          />
        </div>
      </div>
    </header>
  );
};

export default StatusBar;
