import React from "react";
import { AiFillHome, AiOutlineSearch, AiOutlineEdit, AiOutlineHeart, AiOutlineUser } from "react-icons/ai";
import Link from "next/link";

interface FooterProps {
  themeMode: 'default' | 'token';
}

const Footer: React.FC<FooterProps> = ({ themeMode }) => {
  return (
    <footer className={`fixed bottom-0 left-0 w-full h-16 ${
      themeMode === 'token' ? 'bg-yellow-500' : 'bg-[#5932EA]'
    } flex justify-around items-center z-50 transition-colors duration-300`}>
      <Link href="/">
        <AiFillHome size={28} className="text-white" />
      </Link>
      <Link href="/search">
        <AiOutlineSearch size={28} className="text-white" />
      </Link>
      <AiOutlineEdit size={28} className="text-white" />
      <AiOutlineHeart size={28} className="text-white" />
      <AiOutlineUser size={28} className="text-white" />
    </footer>
  );
};

export default Footer;
