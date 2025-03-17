"use client";
import React from "react";
import styles from "./GoalsPlans.module.css";
import StatusBar from "./StatusBar";
import Header from "./Header";
import GoalSection from "./GoalSection";
import ActionButton from "./ActionButton";
import LearningResource from "./LearningResource";
import NavigationBar from "./NavigationBar";

const GoalsPlans: React.FC = () => {
  const dailyGoals = [
    "Read the Book of Mormon for 15 minutes",
    "Share a scripture on insta story",
    "Meet with the missionaries",
  ];

  const monthlyGoals = [
    "Attend the temple twice",
    "Teach with the missionaries twice",
    "Reach out to ministering assignment",
  ];

  const yearlyGoals = [
    "Receive my endowment",
    "Have 2 of my friends accept the gospel",
    "Finish reading the Book of Mormon",
  ];

  const handleSetGoals = () => {
    console.log("Set goals button clicked");
    // Implementation for setting goals
  };

  const handleLearningResource = () => {
    console.log("Learning resource clicked");
    // Implementation for opening learning resources
  };

  return (
    <main className={styles.goalsPlans}>
      <div className={styles.goalsPlans2}>
        <StatusBar />
        <Header />

        <GoalSection title="Daily Goals" goals={dailyGoals} variant="daily" />

        <GoalSection
          title="Monthly Goals"
          goals={monthlyGoals}
          variant="monthly"
        />

        <section className={styles.yearlyGoalsContainer}>
          <GoalSection
            title="Yearly Goals"
            goals={yearlyGoals}
            variant="yearly"
          />

          <ActionButton
            text="Set Goals and Make Plans"
            onClick={handleSetGoals}
          />

          <LearningResource
            text="Learn about Goal Setting and Planning"
            iconSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/473bbe43233b7352e1b28add63d02b16316076abc3dba578b5cb046ca10d7a4a?placeholderIfAbsent=true&apiKey=3c1836ca9e544bbe8603c758fecc6a89"
            onClick={handleLearningResource}
          />
        </section>

        <NavigationBar />
      </div>
    </main>
  );
};

export default GoalsPlans;
