import React from 'react';
import { Star, MapPin, Bookmark, CheckSquare, Menu } from 'lucide-react';
import { cn } from '@/lib/utils';

export type TabItem = {
  id: string;
  label: string;
  icon: React.ReactNode;
};

const defaultTabs: TabItem[] = [
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

interface TabBarProps {
  tabs?: TabItem[];
  activeTab: string;
  onTabChange: (tabId: string) => void;
}

const TabBar: React.FC<TabBarProps> = ({
  tabs = defaultTabs,
  activeTab,
  onTabChange,
}) => {
  return (
    <div className="w-full bg-tabbar text-white py-2 px-4 flex justify-between items-center animate-fade-in">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => onTabChange(tab.id)}
          className={cn(
            'tab-item flex flex-col items-center justify-center px-2 py-1 rounded-md transition-all',
            activeTab === tab.id
              ? 'active animate-tab-highlight'
              : 'text-slate-200'
          )}
        >
          <div className="mb-1">{tab.icon}</div>
          <span className="text-xs">{tab.label}</span>
        </button>
      ))}
    </div>
  );
};

export default TabBar;
