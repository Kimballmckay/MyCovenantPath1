'use client';
import * as React from 'react';

export const Header: React.FC = () => {
  return (
    <header className="flex flex-row items-center justify-between w-full mb-4">
      {/* Left: Back button */}
      <button className="flex justify-center items-center w-10 h-10 bg-blue-950 rounded-full">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/88756fb064047a3fac6fb22078fe57c50497d4e6?placeholderIfAbsent=true&apiKey=67d06c088f3849ce8c0f6314319fc847"
          className="w-6 h-6"
          alt="Back"
        />
      </button>
      
      {/* Center: Title */}
      <h1 className="text-3xl font-semibold text-black">My Studies</h1>
      
      {/* Right: Profile picture */}
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/a63c3342c968299445bea749b1d9ea8963e2a823?placeholderIfAbsent=true&apiKey=67d06c088f3849ce8c0f6314319fc847"
        className="w-10 h-10 rounded-full object-cover"
        alt="Profile"
      />
    </header>
  );
};
