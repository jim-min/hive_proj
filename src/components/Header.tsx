import React, { useState } from "react";
import { MdGeneratingTokens, MdOutlineMood } from "react-icons/md";

type ThemeMode = 'default' | 'token';

const TokenInfo = ({token} : {token: number}) => {
  return (
    <div className={`rounded-full bg-white flex items-center gap-3 border border-[#D2D2D3] px-3 py-1 ${token < 1 ? 'text-red-500' : ''} transition-all duration-300`}>
      <MdGeneratingTokens className={token < 1 ? 'text-[#D2D2D3]' : 'text-yellow-500'}/>
      {token}
    </div>
  )
}

const Header: React.FC = () => {
  const [themeMode, setThemeMode] = useState<ThemeMode>('default');
  
  const toggleThemeMode = (mode: ThemeMode) => {
    setThemeMode(mode);
    // 부모 컴포넌트에 테마 변경을 알림
    const event = new CustomEvent('themeChange', { detail: { mode } });
    window.dispatchEvent(event);
  };
  return (
    <header className={`flex items-center justify-between px-8 h-16 ${themeMode === 'token' ? 'bg-yellow-500' : 'bg-[#5932EA]'} shadow-sm sticky top-0 z-50 transition-colors duration-300`}>
      {/* Logo (left) */}
      <div className="flex-1 flex items-center">
        <span className="font-bold text-2xl text-white">
          HiveLogo
        </span>
      </div>
      {/* Center buttons */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex gap-4">
        <button 
          onClick={() => toggleThemeMode('default')}
          className={`w-10 h-10 rounded-lg flex items-center justify-center cursor-pointer transition-colors ${themeMode === 'default' ? 'bg-[#5932EA] text-white' : 'bg-gray-100 hover:bg-gray-300'}`}
        >
          <MdOutlineMood />
        </button>
        <button 
          onClick={() => toggleThemeMode('token')}
          className={`w-10 h-10 rounded-lg flex items-center justify-center cursor-pointer transition-colors ${themeMode === 'token' ? 'bg-yellow-500 text-white' : 'bg-gray-100 hover:bg-gray-300'}`}
        >
          <MdGeneratingTokens />
        </button>
      </div>
      <div className={`transition-opacity duration-300 ${themeMode === 'token' ? 'opacity-100' : 'opacity-0'}`}>
        {themeMode === 'token' && <TokenInfo token={100} />}
      </div>
    </header>
  );
};

export default Header;
