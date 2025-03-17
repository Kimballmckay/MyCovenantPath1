import React from 'react';

const StatusBar: React.FC = () => {
  // Get current time in HH:MM format
    const getTime = () => {
        const now = new Date();
        return now.toLocaleTimeString('en-US', { 
            hour: '2-digit', 
            minute: '2-digit',
            hour12: false 
        });
    };

    return (
        <div className="status-bar w-full px-5 py-2 flex justify-between items-center animate-fade-in">
            <div className="text-lg font-semibold">{getTime()}</div>
            <div className="flex items-center space-x-1">
                <div className="h-3 w-4">
                    <div className="h-full w-full relative">
                        {[1, 2, 3, 4].map((i) => (
                            <div 
                                key={i} 
                                className="absolute bottom-0 bg-black w-[15%] rounded-sm"
                                style={{ 
                                    height: `${i * 25}%`, 
                                    left: `${(i - 1) * 20 + (i === 1 ? 0 : 5)}%`
                                }}
                            />
                        ))}
                    </div>
                </div>
                <div className="h-3 w-4">
                    <div className="h-full flex items-end justify-center">
                        <div className="h-1.5 w-1.5 bg-black rounded-full mx-[1px]" />
                        <div className="h-2 w-1.5 bg-black rounded-full mx-[1px]" />
                        <div className="h-2.5 w-1.5 bg-black rounded-full mx-[1px]" />
                    </div>
                </div>
                <div className="h-3 w-6 relative">
                    <div className="absolute inset-0 border border-black rounded-sm" />
                    <div className="absolute inset-[2px] bg-black rounded-sm" />
                </div>
            </div>
        </div>
    );
};

export default StatusBar;