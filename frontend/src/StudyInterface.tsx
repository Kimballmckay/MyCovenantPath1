"use client";

import { StatusBar } from "./StatusBar";
import { Header } from "./Header";
import { ContinueReading } from "./ContinueReading";
import { WhatsNext } from "./WhatsNext";
import { AdditionalResources } from "./AdditionalResources";
import { NavigationFooter } from "./NavigationFooter";

export const StudyInterface = () => {
  return (
    <main className="w-full bg-white min-h-[screen]">
      <StatusBar />
      <Header />
      <div className="flex flex-col gap-10 px-3.5">
        <ContinueReading />
        <WhatsNext />
        <AdditionalResources />
      </div>
      <NavigationFooter />
    </main>
  );
};

export default StudyInterface;
