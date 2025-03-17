import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

interface HeaderProps {
  title: string;
  onBackClick?: () => void;
  profileImage?: string;
}

const Header: React.FC<HeaderProps> = ({
  title,
  onBackClick = () => {},
  profileImage = '/lovable-uploads/cf41c5fb-d928-4d7a-84e9-4337327ed1c6.png',
}) => {
  return (
    <header className="w-full px-4 py-2 flex justify-between items-center animate-fade-in">
      <button
        onClick={onBackClick}
        className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-white transition-transform hover:scale-105 active:scale-95"
      >
        <ArrowLeft size={20} />
      </button>

      <h1 className="text-2xl font-bold">{title}</h1>

      <Avatar className="w-10 h-10 border border-slate-200 transition-transform hover:scale-105">
        <AvatarImage src={profileImage} alt="Profile" />
        <AvatarFallback>U</AvatarFallback>
      </Avatar>
    </header>
  );
};

export default Header;
