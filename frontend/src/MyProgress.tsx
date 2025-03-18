// MyProgress.tsx
'use client';
import  { useState } from "react";
import MobileLayout from "@/components/mobile/MobileLayout"; // Mobile layout
import StatusBar from "@/components/mobile/StatusBar"; // Status bar
import Header from "@/components/mobile/Header"; // Header component
import TabBar from "@/components/mobile/TabBar"; // Tab bar
import ChurchAttendance from "./ChurchAttendance"; // Example of content component
import TopicsStudied from "./TopicsStudied"; // Example of content component
import TempleAttendance from "./TempleAttendance"; // Example of content component

function MyProgress() {
  const [activeTab, setActiveTab] = useState("home"); // Example active tab state

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
  };

  return (
    <MobileLayout title="My Progress">
      {/* Header */}
      <Header title="My Progress" />

      {/* StatusBar */}
      <StatusBar />

      <main className="mx-auto w-full max-w-[480px]">
        <div className="overflow-hidden w-full bg-white">
          <section className="flex flex-col items-start px-3.5 mt-8 w-full">
            <header className="flex gap-5 justify-between self-stretch">
              <button className="flex flex-col justify-center items-center p-0.5 min-h-11">
                <div className="flex overflow-hidden gap-2.5 justify-center items-center w-10 h-10 bg-blue-950 rounded-[100px]">
                  <div className="flex gap-0 justify-center items-center self-stretch p-2 my-auto w-10">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/b88e52832bdf5fa7ada12911336e0d4d27f10cdb04410ced563f8049909a6cf8?placeholderIfAbsent=true&apiKey=f9d1cc47ea5440408c735bea3934bb2e"
                      className="object-contain self-stretch my-auto w-6 aspect-square"
                      alt="Back button"
                    />
                  </div>
                </div>
              </button>
              <h1 className="my-auto text-3xl font-semibold leading-8 text-center text-black">
                My Progress
                <br />
              </h1>
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/03c1521c1faadee44e8c85cd5235d55c46e79f952492b3abd5720e713ff662c2?placeholderIfAbsent=true&apiKey=f9d1cc47ea5440408c735bea3934bb2e"
                className="object-contain shrink-0 w-11 rounded-full aspect-square"
                alt="User profile"
              />
            </header>

            {/* Content Components */}
            <ChurchAttendance />
            <TopicsStudied />
            <TempleAttendance />
          </section>
        </div>
      </main>

      {/* Tab Bar */}
      <TabBar activeTab={activeTab} onTabChange={handleTabChange} />
    </MobileLayout>
  );
}

export default MyProgress;