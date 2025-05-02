import React from "react";
import DonutChart from "@/components/DonutChart";
import Image from "next/image";
import { Sidebar } from "@/components/Sidebar";

export default function MyInfo() {
  return (
    <div className="flex min-h-screen bg-[#f7f9fb]">
      {/* Sidebar placeholder (reuse layout/sidebar in real app) */}
      <Sidebar />
      <main className="flex-1 w-full max-w-full p-4 md:p-8 flex flex-col gap-8 overflow-x-hidden">
        {/* 내정보 카드 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <section className="bg-white rounded-2xl shadow-lg p-8 flex flex-col gap-4">
            <h2 className="text-2xl font-bold mb-4">내정보</h2>
            <div className="flex gap-6 items-center">
              <Image src="/user.png" alt="user" width={60} height={60} className="rounded-full border" />
              <ul className="text-base">
                <li>이름: <span className="text-blue-700 font-bold">김홍익</span></li>
                <li>ID: <span className="text-blue-700 font-bold">123456</span></li>
                <li>가입일: <span className="text-blue-700 font-bold">2025.01.24</span></li>
                <li>조사 응답 수 랭킹: <span className="text-blue-700 font-bold">456위</span></li>
                <li>조사 신청 수: <span className="text-blue-700 font-bold">40건</span></li>
              </ul>
            </div>
          </section>
          {/* 보상 카드 */}
          <section className="bg-white rounded-2xl shadow-lg p-8 flex flex-col gap-4 items-center">
            <h2 className="text-2xl font-bold mb-2">보상</h2>
            <p className="text-gray-400 text-sm mb-2">여기를 누르면 페이지로 넘어갈 수 있어요.</p>
            <Image src="/reward_3d.png" alt="reward" width={180} height={110} className="mb-4" />
            <div className="w-full flex flex-col gap-2 mt-2">
              <button className="bg-[#7B61FF] text-white rounded-lg py-2 font-semibold">카카오 페이로 결제하기</button>
              <button className="bg-[#7B61FF] text-white rounded-lg py-2 font-semibold">토스로 결제하기</button>
              <button className="bg-[#7B61FF] text-white rounded-lg py-2 font-semibold">카드로 결제하기</button>
              <button className="bg-gray-300 text-gray-600 rounded-lg py-2 font-semibold">계좌이체 하기</button>
            </div>
            <button className="text-xs text-gray-500 underline mt-2">담은 상품 확인하러 가기</button>
          </section>
        </div>
        {/* 최근 신청한 SURVEY */}
        <section className="bg-white rounded-2xl shadow-lg p-8 mt-8">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-bold">최근 신청한 SURVEY</h3>
            <button className="text-xs text-gray-400 underline">- 자세히 보기</button>
          </div>
          <div className="flex flex-col md:flex-row gap-8">
            <div className="flex-1 flex flex-col items-center">
              <DonutChart value={65} />
            </div>
            <div className="flex-1 flex flex-col justify-center">
              <div className="font-bold mb-2">결과 해석:</div>
              <ul className="text-sm space-y-1">
                <li><span className="text-red-400 font-bold">●</span> 10대~30대 응답률</li>
                <li><span className="text-yellow-400 font-bold">●</span> 20대~30대 응답률</li>
                <li><span className="text-purple-400 font-bold">●</span> 30대~40대 응답률</li>
                <li><span className="text-blue-400 font-bold">●</span> 40대~50대 응답률</li>
                <li><span className="text-gray-400 font-bold">●</span> 50대~60대 응답률</li>
              </ul>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
