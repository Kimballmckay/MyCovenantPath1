'use client';
import * as React from 'react';

interface ContentSectionProps {
  icon: string;
  title: string;
  children: React.ReactNode;
}

export const ContentSection: React.FC<ContentSectionProps> = ({
  icon,
  title,
  children,
}) => {
  return (
    <section className="flex flex-col">
      <div className="flex gap-1.5 items-start text-2xl leading-none text-center text-black">
        <img
          src={icon}
          className="object-contain shrink-0 aspect-square w-[30px]"
          alt={`${title} icon`}
        />
        <h2 className="mt-5">{title}</h2>
      </div>
      {children}
    </section>
  );
};
