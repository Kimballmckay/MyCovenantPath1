import React from "react";
import styles from "./GoalsPlans.module.css";

interface LearningResourceProps {
  text: string;
  iconSrc: string;
  onClick?: () => void;
}

const LearningResource: React.FC<LearningResourceProps> = ({
  text,
  iconSrc,
  onClick,
}) => {
  return (
    <button className={styles.learningResourceContainer} onClick={onClick}>
      <img
        src={iconSrc}
        alt="Learning resource"
        className={styles.learningIcon}
      />
      <span className={styles.learningText}>{text}</span>
    </button>
  );
};

export default LearningResource;
