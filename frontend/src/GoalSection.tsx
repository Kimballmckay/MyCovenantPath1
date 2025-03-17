import React from "react";
import styles from "./assets/styles/styles.module.css";

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
  const getContainerStyles = () => {
    switch (variant) {
      case "monthly":
        return styles.monthlyGoalsContainer;
      case "yearly":
        return styles.yearlyGoalsContainer;
      default:
        return "";
    }
  };

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

  const renderEditButton = () => {
    switch (variant) {
      case "monthly":
        return (
          <button
            className={styles.monthlyEditButton}
            aria-label={`Edit ${title}`}
          >
            <div className={styles.stateLayer}>
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/eaf75a784b718d28ed2933d5ad450246e42bdf6ddce1c66851dfbc0c5722782c?placeholderIfAbsent=true&apiKey=3c1836ca9e544bbe8603c758fecc6a89"
                alt="Edit"
                className={styles.editIcon}
              />
            </div>
          </button>
        );
      case "yearly":
        return (
          <button
            className={styles.yearlyEditButton}
            aria-label={`Edit ${title}`}
          >
            <div className={styles.yearlyEditButtonContainer}>
              <div className={styles.stateLayer}>
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/eaf75a784b718d28ed2933d5ad450246e42bdf6ddce1c66851dfbc0c5722782c?placeholderIfAbsent=true&apiKey=3c1836ca9e544bbe8603c758fecc6a89"
                  alt="Edit"
                  className={styles.editIcon}
                />
              </div>
            </div>
          </button>
        );
      default:
        return (
          <button className={styles.editButton} aria-label={`Edit ${title}`}>
            <div className={styles.editButtonContainer}>
              <div className={styles.stateLayer}>
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/eaf75a784b718d28ed2933d5ad450246e42bdf6ddce1c66851dfbc0c5722782c?placeholderIfAbsent=true&apiKey=3c1836ca9e544bbe8603c758fecc6a89"
                  alt="Edit"
                  className={styles.editIcon}
                />
              </div>
            </div>
          </button>
        );
    }
  };

  const containerClass = getContainerStyles();
  const Wrapper = containerClass ? "section" : React.Fragment;

  return (
    <Wrapper {...(containerClass ? { className: containerClass } : {})}>
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
      </article>
      {renderEditButton()}
    </Wrapper>
  );
};

export default GoalSection;
