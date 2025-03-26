'use client';
import React, { useState } from 'react';
import styles from './assets/styles/goalsplans.module.css';

interface AddGoalModalProps {
  title: string;
  onClose: () => void;
  onAddGoal: (goal: string) => void;
}

const AddGoalModal: React.FC<AddGoalModalProps> = ({ title, onClose, onAddGoal }) => {
  const [newGoal, setNewGoal] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newGoal.trim()) {
      onAddGoal(newGoal);
      setNewGoal('');
      onClose();
    }
  };

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <h2 className={styles.modalTitle}>Add New {title}</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={newGoal}
            onChange={(e) => setNewGoal(e.target.value)}
            className={styles.modalInput}
            placeholder={`Enter your new ${title.toLowerCase()}`}
            autoFocus
          />
          <div className={styles.modalActions}>
            <button 
              type="button" 
              onClick={onClose} 
              className={styles.cancelButton}
            >
              Cancel
            </button>
            <button 
              type="submit" 
              className={styles.addButton}
            >
              Add Goal
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddGoalModal;