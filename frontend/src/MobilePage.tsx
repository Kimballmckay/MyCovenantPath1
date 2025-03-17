
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MobileLayout from '@/components/mobile/MobileLayout';
import { TabItem } from '@/components/mobile/TabBar';
import { Star, MapPin, Bookmark, CheckSquare, Menu } from 'lucide-react';

const MobilePage: React.FC = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('path');

  const handleBackClick = () => {
    navigate('/');
  };

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
    console.log(`Tab changed to: ${tabId}`);
    
    // Navigate to different pages based on tab selection
    if (tabId === 'progress') {
      navigate('/my-progress');
    } else if (tabId === 'study') {
      navigate('/church-attendance');
    }
  };
  
  const tabs: TabItem[] = [
    {
      id: 'path',
      label: 'Path',
      icon: <Star size={20} />,
    },
    {
      id: 'progress',
      label: 'Progress',
      icon: <MapPin size={20} />,
    },
    {
      id: 'goals',
      label: 'Goals',
      icon: <Bookmark size={20} />,
    },
    {
      id: 'study',
      label: 'Study',
      icon: <CheckSquare size={20} />,
    },
    {
      id: 'menu',
      label: 'Menu',
      icon: <Menu size={20} />,
    },
  ];

  return (
    <MobileLayout
      title="Page Name"
      onBackClick={handleBackClick}
      onTabChange={handleTabChange}
      defaultActiveTab={activeTab}
      tabs={tabs}
    >
      <div className="p-4 min-h-[calc(100vh-136px)]">
        <div className="w-full h-full flex items-center justify-center">
          <p className="text-lg text-gray-500">
            {activeTab === 'path' && 'Path Content'}
            {activeTab === 'progress' && 'Progress Content - Click to go to My Progress page'}
            {activeTab === 'goals' && 'Goals Content'}
            {activeTab === 'study' && 'Study Content - Click to go to Church Attendance page'}
            {activeTab === 'menu' && 'Menu Content'}
          </p>
        </div>
      </div>
    </MobileLayout>
  );
};

export default MobilePage;
