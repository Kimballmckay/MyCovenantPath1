import React from "react";
import styles from "./assets/styles/goalsplans.module.css";

interface GoalSectionProps {
  title: string;
  goals: string[];
  variant?: "daily" | "monthly" | "yearly";
}

const GoalSection: React.FC<GoalSectionProps> = ({
  title,
  goals,
  variant = "daily",
}) => {
  const getSectionStyles = () => {
    switch (variant) {
      case "monthly":
        return styles.monthlyGoalSection;
      case "yearly":
        return styles.yearlyGoalSection;
      default:
        return styles.goalSection;
    }
  };

  const getContentStyles = () => {
    switch (variant) {
      case "monthly":
        return styles.monthlyGoalContent;
      case "yearly":
        return styles.yearlyGoalContent;
      default:
        return styles.goalContent;
    }
  };

  const getTextContentStyles = () => {
    switch (variant) {
      case "monthly":
        return styles.monthlyGoalTextContent;
      case "yearly":
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
          <p className={styles.goalText}>
            {goals.map((goal, index) => (
              <React.Fragment key={index}>
                {goal}
                {index < goals.length - 1 && <br />}
              </React.Fragment>
            ))}
          </p>
        </div>
      </div>
      <button
        className={styles.editButton}
        aria-label={`Edit ${title}`}
      >
        <div className={styles.stateLayer}>
          <span className={styles.editIcon}>+</span>
        </div>
      </button>
    </article>
  );
};

export default GoalSection;