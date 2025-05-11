"use client";
import React, { useState } from "react";
import { AiFillHome, AiOutlineSearch, AiOutlineEdit, AiOutlineHeart, AiOutlineUser } from "react-icons/ai";
import Link from "next/link";

export default function SearchPage() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <main className="min-h-screen bg-gray-50 pb-20 py-8">
      <div className="w-full max-w-xl mx-auto px-4">
        <div className="mb-6">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="검색어를 입력하세요"
            className="w-full border rounded-lg px-4 py-2"
          />
        </div>
        <div className="bg-white rounded-xl shadow p-4">
          <div className="text-center text-gray-500">검색 결과가 없습니다</div>
        </div>
      </div>
      {/* Footer 네비게이션 바 */}
      <footer className="fixed bottom-0 left-0 w-full h-16 bg-[#5932EA] flex justify-around items-center z-50">
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
    </main>
  );
} 