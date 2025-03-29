'use client';
import React, { useState } from 'react';
import styles from './assets/styles/goalsplans.module.css';

interface GoalManagementModalProps {
  goal: string;
  onClose: () => void;
  onUpdate: (updatedGoal: string) => void;
  onDelete: () => void;
  onComplete: () => void;
}

const GoalManagementModal: React.FC<GoalManagementModalProps> = ({
  goal,
  onClose,
  onUpdate,
  onDelete,
  onComplete,
}) => {
  const [editedGoal, setEditedGoal] = useState(goal);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editedGoal.trim()) {
      onUpdate(editedGoal);
    }
  };

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <h2 className={styles.modalTitle}>Manage Goal</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={editedGoal}
            onChange={(e) => setEditedGoal(e.target.value)}
            className={styles.modalInput}
            autoFocus
          />
          <div className={styles.goalManagementActions}>
            <button
              type="button"
              onClick={onDelete}
              className={styles.deleteButton}
            >
              Delete
            </button>
            <button
              type="button"
              onClick={onComplete}
              className={styles.completeButton}
            >
              Complete
            </button>
            <button
              type="button"
              onClick={onClose}
              className={styles.cancelButton}
            >
              Cancel
            </button>
            <button type="submit" className={styles.updateButton}>
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default GoalManagementModal;
