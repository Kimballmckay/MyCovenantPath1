'use client';
import * as React from 'react';
import { NavItem } from './NavItem';

export const NavigationBar: React.FC = () => {
  return (
    <nav className="flex gap-2 items-start px-2 mt-16 bg-slate-500">
      <NavItem
        icon="https://cdn.builder.io/api/v1/image/assets/TEMP/5765cd6a518589313001d3c74a93674515c99df5?placeholderIfAbsent=true&apiKey=67d06c088f3849ce8c0f6314319fc847"
        label="Path"
      />
      <NavItem
        icon="https://cdn.builder.io/api/v1/image/assets/TEMP/27fecfbdfa711f110dc97b16f2e6e2e349f0d446?placeholderIfAbsent=true&apiKey=67d06c088f3849ce8c0f6314319fc847"
        label="Progress"
      />
      <NavItem
        icon="https://cdn.builder.io/api/v1/image/assets/TEMP/b2e2391ba8b39b346c0c9b7fff7fbeef3209040a?placeholderIfAbsent=true&apiKey=67d06c088f3849ce8c0f6314319fc847"
        label="Goals"
      />
      <NavItem
        icon="https://cdn.builder.io/api/v1/image/assets/TEMP/56c22d7b8b41bde161b62bbb4968430ef65f06ea?placeholderIfAbsent=true&apiKey=67d06c088f3849ce8c0f6314319fc847"
        label="Study"
        isActive={true}
      />
      <NavItem
        icon="https://cdn.builder.io/api/v1/image/assets/TEMP/fa4b0f3c32bab4b87170149256088ed71bf9383f?placeholderIfAbsent=true&apiKey=67d06c088f3849ce8c0f6314319fc847"
        label="Menu"
      />
    </nav>
  );
};
