"use client";
import React from "react";
import StatusBar from "./StatusBar";
import NavigationBar from "./NavigationBar";
import ChurchAttendance from "./ChurchAttendance";
import TopicsStudied from "./TopicsStudied";
import TempleAttendance from "./TempleAttendance";

function MyProgress() {
  return (
    <main className="mx-auto w-full max-w-[480px]">
      <div className="overflow-hidden w-full bg-white">
        <StatusBar />

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

          <ChurchAttendance />
          <TopicsStudied />
          <TempleAttendance />
        </section>

        <NavigationBar />
      </div>
    </main>
  );
}

export default MyProgress;
