import React from 'react';
import styles from '../assets/styles/goalsplans.module.css';

interface GoalSectionProps {
  title: string;
  goals: string[];
  variant?: 'daily' | 'monthly' | 'yearly';
  onAddClick?: () => void;
  onGoalClick?: (goal: string, index: number) => void;
}

const GoalSection: React.FC<GoalSectionProps> = ({
  title,
  goals,
  variant = 'daily',
  onAddClick,
  onGoalClick,
}) => {
  const getSectionStyles = () => {
    switch (variant) {
      case 'monthly':
        return styles.monthlyGoalSection;
      case 'yearly':
        return styles.yearlyGoalSection;
      default:
        return styles.goalSection;
    }
  };

  const getContentStyles = () => {
    switch (variant) {
      case 'monthly':
        return styles.monthlyGoalContent;
      case 'yearly':
        return styles.yearlyGoalContent;
      default:
        return styles.goalContent;
    }
  };

  const getTextContentStyles = () => {
    switch (variant) {
      case 'monthly':
        return styles.monthlyGoalTextContent;
      case 'yearly':
        return styles.yearlyGoalTextContent;
      default:
        return styles.goalTextContent;
    }
  };

  return (
    <article className={getSectionStyles()}>
      <div className={getContentStyles()}>
        <div className={getTextContentStyles()}>
          <h2 className={styles.goalHeading}>{title}</h2>
          <div className={styles.goalText}>
            {goals.map((goal, index) => (
              <div
                key={index}
                className={styles.goalItem}
                onClick={() => onGoalClick && onGoalClick(goal, index)}
              >
                {goal}
              </div>
            ))}
          </div>
        </div>
      </div>
      <button
        className={styles.editButton}
        aria-label={`Edit ${title}`}
        onClick={onAddClick}
      >
        <div className={styles.stateLayer}>
          <span className={styles.editIcon}>+</span>
        </div>
      </button>
    </article>
  );
};

export default GoalSection;
