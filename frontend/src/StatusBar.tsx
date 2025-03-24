'use client';
import * as React from 'react';

export const StatusBar: React.FC = () => {
  return (
    <header className="pt-5 w-full bg-white min-h-[52px]">
      <div className="flex justify-between items-center w-full">
        <time className="flex-1 shrink gap-2.5 self-stretch pr-1.5 pl-4 my-auto text-lg leading-none text-center text-black whitespace-nowrap basis-0 font-[590]">
          9:41
        </time>
        <div className="flex shrink-0 self-stretch my-auto h-2.5 w-[124px]" />
        <div className="flex flex-1 shrink gap-2 justify-center items-center self-stretch pr-4 pl-1.5 my-auto basis-0">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/9de4f2be8a72efc687cb42efd07645ff24113d9d?placeholderIfAbsent=true&apiKey=67d06c088f3849ce8c0f6314319fc847"
            className="object-contain shrink-0 self-stretch my-auto aspect-[1.58] w-[19px]"
            alt="Signal strength"
          />
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/3f50797c862f1d94f13f819ef78646406ad340be?placeholderIfAbsent=true&apiKey=67d06c088f3849ce8c0f6314319fc847"
            className="object-contain shrink-0 self-stretch my-auto aspect-[1.42] w-[17px]"
            alt="Battery level"
          />
        </div>
      </div>
    </header>
  );
};
