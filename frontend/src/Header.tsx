import React from "react";
import styles from "./assets/styles/styles.module.css";

const Header: React.FC = () => {
  return (
    <section className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <button className={styles.backButton} aria-label="Go back">
          <div className={styles.buttonContainer}>
            <div className={styles.stateLayer}>
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/b88e52832bdf5fa7ada12911336e0d4d27f10cdb04410ced563f8049909a6cf8?placeholderIfAbsent=true&apiKey=3c1836ca9e544bbe8603c758fecc6a89"
                alt="Back"
                className={styles.buttonIcon}
              />
            </div>
          </div>
        </button>
        <h1 className={styles.pageTitle}>Goals & Plans</h1>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/a4f03672771789bb5d02f38504797c30eb4201547796412b50e380a8c4985e45?placeholderIfAbsent=true&apiKey=3c1836ca9e544bbe8603c758fecc6a89"
          alt="Profile"
          className={styles.profileImage}
        />
      </div>
    </section>
  );
};

export default Header;
