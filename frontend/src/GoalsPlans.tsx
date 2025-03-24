'use client';
import React from 'react';
import styles from './assets/styles/goalsplans.module.css';
import GoalSection from './GoalSection';

const GoalsPlans: React.FC = () => {
  const dailyGoals = [
    'Read the Book of Mormon for 15 minutes',
    'Share a scripture on insta story',
    'Meet with the missionaries',
  ];

  const monthlyGoals = [
    'Attend the temple twice',
    'Teach with the missionaries twice',
    'Reach out to ministering assignment',
  ];

  const yearlyGoals = [
    'Receive my endowment',
    'Have 2 of my friends accept the gospel',
    'Finish reading the Book of Mormon',
  ];

  const handleSetGoals = () => {
    console.log('Set goals button clicked');
    // Implementation for setting goals
  };

  const handleLearningResource = () => {
    console.log('Learning resource clicked');
    // Implementation for opening learning resources
  };

  return (
    <main className={styles.goalsPlans}>
      <div className={styles.goalsPlans2}>
        {/* Goal Sections */}
        <GoalSection title="Daily Goals" goals={dailyGoals} variant="daily" />
        <GoalSection
          title="Monthly Goals"
          goals={monthlyGoals}
          variant="monthly"
        />
        <GoalSection
          title="Yearly Goals"
          goals={yearlyGoals}
          variant="yearly"
        />

        {/* Action Button */}
        <button className={styles.actionButton} onClick={handleSetGoals}>
          Set Goals and Make Plans
        </button>

        {/* Learning Resource */}
        <div
          className={styles.learningResource}
          onClick={handleLearningResource}
        >
          <span className={styles.resourceIcon}>📚</span>
          <span className={styles.resourceText}>
            Learn about Goal Setting and Planning
          </span>
        </div>
      </div>
    </main>
  );
};

export default GoalsPlans;
