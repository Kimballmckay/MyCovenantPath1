'use client';
import * as React from 'react';

interface NavItemProps {
  icon: string;
  label: string;
  isActive?: boolean;
}

export const NavItem: React.FC<NavItemProps> = ({
  icon,
  label,
  isActive = false,
}) => {
  return (
    <div className="flex flex-col flex-1 shrink justify-center pt-3 pb-4 basis-0">
      <div
        className={`flex justify-center items-center self-center w-8 rounded-2xl ${
          isActive ? 'bg-white' : ''
        }`}
      >
        <div
          className={`flex gap-2.5 justify-center items-center self-stretch px-5 py-1 my-auto w-16 min-h-8 ${
            isActive ? 'rounded-2xl bg-blue-950' : ''
          }`}
        >
          <img
            src={icon}
            className="object-contain self-stretch my-auto w-6 aspect-square"
            alt={`${label} icon`}
          />
        </div>
      </div>
      <span className="mt-1 text-xs font-medium tracking-wide leading-none text-center text-white">
        {label}
      </span>
    </div>
  );
};
