import React, { ReactNode, useState } from 'react';
import StatusBar from './StatusBar';
import Header from './Header';
import TabBar, { TabItem } from './TabBar';

interface MobileLayoutProps {
    children: ReactNode;
    title: string;
    onBackClick?: () => void;
    profileImage?: string;
    tabs?: TabItem[];
    defaultActiveTab?: string;
    onTabChange?: (tabId: string) => void;
}

const MobileLayout: React.FC<MobileLayoutProps> = ({
    children,
    title,
    onBackClick,
    profileImage,
    tabs,
    defaultActiveTab = 'path',
    onTabChange
}) => {
    const [activeTab, setActiveTab] = useState(defaultActiveTab);

    const handleTabChange = (tabId: string) => {
        setActiveTab(tabId);
        onTabChange?.(tabId);
    };

    return (
        <div className="mobile-container bg-white flex flex-col">
            <StatusBar />

            <Header 
                title={title}
                onBackClick={onBackClick}
                profileImage={profileImage}
            />

            <main className="flex-1 overflow-auto">
                {children}
            </main>

            <div className="sticky bottom-0 w-full">
                <TabBar 
                tabs={tabs}
                activeTab={activeTab} 
                onTabChange={handleTabChange} 
                />
        </div>
    </div>
    );
};

export default MobileLayout;