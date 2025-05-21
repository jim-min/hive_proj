import React from "react";
import { MdGeneratingTokens } from "react-icons/md";

const TokenInfo = ({token} : {token: number}) => {
  return (
    <div className={`rounded-full bg-white flex items-center gap-3 border border-[#D2D2D3] px-3 py-1 ${token < 1 ? 'text-red-500' : ''}`}>
      <MdGeneratingTokens className={token < 1 ? 'text-[#D2D2D3]' : 'text-yellow-500'}/>
      {token}
    </div>
  )
}

const Header: React.FC = () => {
  return (
    <header className="flex items-center justify-between px-8 h-16 bg-[#5932EA] shadow-sm sticky top-0 z-50">
      {/* Logo (left) */}
      <div className="flex-1 flex items-center">
        <span className="font-bold text-2xl text-white">
          HiveLogo
        </span>
      </div>
      {/* Center buttons */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex gap-4">
        <button className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center cursor-pointer hover:bg-gray-200 transition-colors">
          {/* 아이콘 자리 */}
        </button>
        <button className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center cursor-pointer hover:bg-gray-200 transition-colors">
          {/* 아이콘 자리 */}
        </button>
      </div>
      <TokenInfo token={1}/>
    </header>
  );
};

export default Header;
