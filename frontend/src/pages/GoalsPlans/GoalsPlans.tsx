'use client';
import React, { useState } from 'react';
import styles from './GoalsComponents/goalsplans.module.css';
import GoalSection from './GoalsComponents/GoalSection';
import AddGoalModal from './GoalsComponents/AddGoalModal';
import GoalManagementModal from './GoalsComponents/GoalManagementModal';
import StatusBar from '../../components/StatusBar';
import NavigationBar from '../../components/NavigationBar';
import MenuHeader from '../../components/RealHeader';

const GoalsPlans: React.FC = () => {
  // State for goals
  const [dailyGoals, setDailyGoals] = useState([
    'Read the Book of Mormon for 15 minutes',
    'Share a scripture on insta story',
    'Meet with the missionaries',
  ]);

  const [monthlyGoals, setMonthlyGoals] = useState([
    'Attend the temple twice',
    'Teach with the missionaries twice',
    'Reach out to ministering assignment',
  ]);

  const [yearlyGoals, setYearlyGoals] = useState([
    'Receive my endowment',
    'Have 2 of my friends accept the gospel',
    'Finish reading the Book of Mormon',
  ]);

  // State for add modal
  const [addModalOpen, setAddModalOpen] = useState(false);
  const [activeGoalType, setActiveGoalType] = useState<
    'daily' | 'monthly' | 'yearly' | null
  >(null);

  // State for management modal
  const [managementModalOpen, setManagementModalOpen] = useState(false);
  const [selectedGoal, setSelectedGoal] = useState('');
  const [selectedGoalIndex, setSelectedGoalIndex] = useState(-1);

  const handleAddGoal = (goalType: 'daily' | 'monthly' | 'yearly') => {
    setActiveGoalType(goalType);
    setAddModalOpen(true);
  };

  const handleCloseAddModal = () => {
    setAddModalOpen(false);
    setActiveGoalType(null);
  };

  const handleSaveGoal = (newGoal: string) => {
    if (activeGoalType === 'daily') {
      setDailyGoals([...dailyGoals, newGoal]);
    } else if (activeGoalType === 'monthly') {
      setMonthlyGoals([...monthlyGoals, newGoal]);
    } else if (activeGoalType === 'yearly') {
      setYearlyGoals([...yearlyGoals, newGoal]);
    }
  };

  const handleGoalClick = (
    goal: string,
    index: number,
    type: 'daily' | 'monthly' | 'yearly'
  ) => {
    setSelectedGoal(goal);
    setSelectedGoalIndex(index);
    setActiveGoalType(type);
    setManagementModalOpen(true);
  };

  const handleCloseManagementModal = () => {
    setManagementModalOpen(false);
    setSelectedGoal('');
    setSelectedGoalIndex(-1);
    setActiveGoalType(null);
  };

  const handleUpdateGoal = (updatedGoal: string) => {
    if (activeGoalType === 'daily') {
      const updatedGoals = [...dailyGoals];
      updatedGoals[selectedGoalIndex] = updatedGoal;
      setDailyGoals(updatedGoals);
    } else if (activeGoalType === 'monthly') {
      const updatedGoals = [...monthlyGoals];
      updatedGoals[selectedGoalIndex] = updatedGoal;
      setMonthlyGoals(updatedGoals);
    } else if (activeGoalType === 'yearly') {
      const updatedGoals = [...yearlyGoals];
      updatedGoals[selectedGoalIndex] = updatedGoal;
      setYearlyGoals(updatedGoals);
    }
    handleCloseManagementModal();
  };

  const handleDeleteGoal = () => {
    if (activeGoalType === 'daily') {
      setDailyGoals(dailyGoals.filter((_, i) => i !== selectedGoalIndex));
    } else if (activeGoalType === 'monthly') {
      setMonthlyGoals(monthlyGoals.filter((_, i) => i !== selectedGoalIndex));
    } else if (activeGoalType === 'yearly') {
      setYearlyGoals(yearlyGoals.filter((_, i) => i !== selectedGoalIndex));
    }
    handleCloseManagementModal();
  };

  const handleCompleteGoal = () => {
    // Here you could implement additional logic for completed goals
    // For now, we'll just delete it as a simple implementation
    handleDeleteGoal();
  };

  const handleSetGoals = () => {
    console.log('Set goals button clicked');
    // Implementation for setting goals
  };

  const getModalTitle = () => {
    switch (activeGoalType) {
      case 'daily':
        return 'Daily Goal';
      case 'monthly':
        return 'Monthly Goal';
      case 'yearly':
        return 'Yearly Goal';
      default:
        return 'Goal';
    }
  };

  return (
    <main className={styles.goalsPlans}>
      <div className={styles.goalsPlans2}>
        <StatusBar />
        <MenuHeader pageName='Goals & Plans'/>

        {/* Goal Sections */}
        <GoalSection
          title="Daily Goals"
          goals={dailyGoals}
          variant="daily"
          onAddClick={() => handleAddGoal('daily')}
          onGoalClick={(goal, index) => handleGoalClick(goal, index, 'daily')}
        />
        <GoalSection
          title="Monthly Goals"
          goals={monthlyGoals}
          variant="monthly"
          onAddClick={() => handleAddGoal('monthly')}
          onGoalClick={(goal, index) => handleGoalClick(goal, index, 'monthly')}
        />
        <GoalSection
          title="Yearly Goals"
          goals={yearlyGoals}
          variant="yearly"
          onAddClick={() => handleAddGoal('yearly')}
          onGoalClick={(goal, index) => handleGoalClick(goal, index, 'yearly')}
        />

        {/* Action Button */}
        <button className={styles.actionButton} onClick={handleSetGoals}>
          Completed Goals & Plans
        </button>

        {/* Learning Resource */}
        <button
          className={styles.learningResource}
          onClick={() =>
            window.open(
              'https://speeches.byu.edu/talks/j-thomas-fyans/goals/',
              '_blank'
            )
          }
        >
          <span className={styles.resourceIcon}>📚</span>
          <span className={styles.resourceText}>
            Learn more about Goal Setting and Planning
          </span>
        </button>

        {/* Add Goal Modal */}
        {addModalOpen && (
          <AddGoalModal
            title={getModalTitle()}
            onClose={handleCloseAddModal}
            onAddGoal={handleSaveGoal}
          />
        )}

        {/* Goal Management Modal */}
        {managementModalOpen && (
          <GoalManagementModal
            goal={selectedGoal}
            onClose={handleCloseManagementModal}
            onUpdate={handleUpdateGoal}
            onDelete={handleDeleteGoal}
            onComplete={handleCompleteGoal}
          />
        )}
        <NavigationBar />
      </div>
    </main>
  );
};

export default GoalsPlans;
