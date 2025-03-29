import React from 'react';
import styles from './assets/styles/styles.module.css';

interface ActionButtonProps {
  text: string;
  onClick?: () => void;
}

const ActionButton: React.FC<ActionButtonProps> = ({ text, onClick }) => {
  return (
    <button className={styles.setGoalsButton} onClick={onClick}>
      <div className={styles.buttonStateLayer}>{text}</div>
    </button>
  );
};

export default ActionButton;
