import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MobileLayout from '@/components/mobile/MobileLayout';
import PathContent from '@/t';
import ProgressContent from '@/MyProgress';
import GoalSection from '@/GoalSection';
import Goalplans from '@/GoalPlans';
import StudyContent from '@/';
import MenuContent from '@/';
import ChurchAttendance from '@/ChurchAttendance'; // Import Church Attendance

const MobilePage: React.FC = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('path');

  const handleBackClick = () => {
    navigate('/');
  };

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
    console.log(`Tab changed to: ${tabId}`);
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'path':
        return <PathContent />;
      case 'progress':
        return <ProgressContent />;
      case 'goals':
        return <GoalsContent />;
      case 'study':
        return <StudyContent />;
      case 'menu':
        return <MenuContent />;
      case 'churchAttendance':  // Add Church Attendance case
        return <ChurchAttendance />;
      default:
        return <p className="text-lg text-gray-500">No content available</p>;
    }
  };

  return (
    <MobileLayout
      title="Page Name"
      onBackClick={handleBackClick}
      onTabChange={handleTabChange}
      defaultActiveTab={activeTab}
    >
      <div className="p-4 min-h-[calc(100vh-136px)]">
        <div className="w-full h-full flex items-center justify-center">
          {renderTabContent()}
        </div>
      </div>
    </MobileLayout>
  );
};

export default MobilePage;
