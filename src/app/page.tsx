import React from "react";
import { FaHome, FaQuestionCircle, FaChartBar, FaListAlt, FaUser, FaRegLifeRing } from "react-icons/fa";
import Image from "next/image";
import DonutChart from "./DonutChart";

export default function Home() {
  return (
    <div className="flex min-h-screen bg-[#f7f9fb]">
      {/* Sidebar */}
      {/* Mobile Header Nav */}
      <nav className="flex md:hidden fixed top-0 left-0 w-full max-w-md z-30 bg-white shadow px-1 py-1 items-center justify-between">
        <div className="flex items-center ml-2">
          <FaHome className="text-xl text-[#7b61ff]" />
        </div>
        <div className="flex gap-0.5">
          <NavItem icon={<FaHome />} label="HOME" active />
          <NavItem icon={<FaQuestionCircle />} label="질문 등록하기" />
          <NavItem icon={<FaChartBar />} label="결과 보기" />
          <NavItem icon={<FaListAlt />} label="나의 설문" />
          <NavItem icon={<FaUser />} label="내 정보" />
          <NavItem icon={<FaRegLifeRing />} label="Help" />
        </div>
      </nav>
      {/* Sidebar (Desktop) */} 
      <aside className="hidden md:flex w-64 bg-white shadow-lg flex-col justify-between py-8 px-6 min-h-screen">
        <div>
          {/* Logo */}
          <div className="flex items-center gap-2 mb-8">
            <span className="font-bold text-xl">SURVEY</span>
            <span className="text-xs text-gray-400">v0.1</span>
          </div>
          {/* Nav */}
          <nav className="flex flex-col gap-2">
            <NavItem icon={<FaHome />} label="HOME" active />
            <NavItem icon={<FaQuestionCircle />} label="질문 등록하기" />
            <NavItem icon={<FaChartBar />} label="결과 보기" />
            <NavItem icon={<FaListAlt />} label="나의 설문" />
            <NavItem icon={<FaUser />} label="내 정보" />
            <NavItem icon={<FaRegLifeRing />} label="Help" />
          </nav>
        </div>
        {/* Survey CTA */}
        <button className="bg-gradient-to-r from-purple-400 to-blue-400 text-white rounded-xl py-4 px-3 text-lg font-bold shadow-md flex flex-col items-center gap-1 hidden md:flex">
          설문조사하고 <br /> 상품 받아가기
          <span className="mt-1 bg-white text-blue-500 rounded px-3 py-1 text-xs font-bold">Get it Now!</span>
        </button>
      </aside>
      {/* Main Content */}
      <main className="flex-1 w-full max-w-full p-4 md:p-8 flex flex-col gap-8 overflow-x-hidden">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6 mt-14 md:mt-0">
          <div className="flex gap-2 md:gap-3 w-full md:w-auto">
            <button className="bg-gray-200 rounded px-3 py-2 text-sm md:px-4 md:py-2 md:text-base font-semibold flex-1 md:flex-none">Sign in</button>
            <button className="bg-[#7b61ff] text-white rounded px-3 py-2 text-sm md:px-4 md:py-2 md:text-base font-semibold flex-1 md:flex-none">Register</button>
          </div>
          <div className="relative w-full md:w-auto">
            <input className="bg-gray-100 rounded-full px-3 py-2 pl-9 w-full md:w-64 text-sm md:text-base focus:outline-none" placeholder="Search" />
            <svg className="w-4 h-4 md:w-5 md:h-5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>
          </div>
        </div>
        {/* Dashboard Cards */}
        <div className="grid grid-cols-3 gap-6 mb-8">
          <DashboardCard icon="💵" title="질문 등록" subtitle="Survey" value="37.8%" valueDesc="응답자 수 증가" valueColor="text-green-500" />
          <DashboardCard icon="🧑‍💻" title="결과 보기" subtitle="Results" value="250명" valueDesc="조사 완료" valueColor="text-red-500" />
          <DashboardCard icon="🛍️" title="내 정보" subtitle="Total Sales" value="11%" valueDesc="this week" valueColor="text-green-500" />
        </div>
        {/* Main Dashboard Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Popular Survey Card */}
          <div className="bg-white rounded-2xl shadow-lg flex-1 p-8 flex flex-col items-center w-full">
            <h2 className="text-2xl font-bold mb-2">지금 가장 인기있는 설문 조사?</h2>
            <p className="text-gray-500 mb-4">홍대생이 뽑은 맛집 순위</p>
            {/* Chart Placeholder */}
            <div className="flex items-center justify-between mb-4 w-full">
              <div className="relative">
                <DonutChart value={65} />
              </div>
              <div className="flex flex-col items-center gap-1">
                <span className="text-lg font-bold">1위 : 라멘트럭</span>
                <span className="text-lg font-bold">2위</span>
                <span className="text-lg font-bold">3위</span>
              </div>
            </div>
          </div>
          {/* Survey Shop */}
          <div className="bg-white rounded-2xl shadow-lg w-full p-8 flex flex-col items-center">
            <h3 className="text-xl font-bold mb-2">SURVEY SHOP</h3>
            <p className="text-gray-400 text-sm mb-8">Customers that buy products</p>
            <div className="flex items-center justify-center pb-4">
              <Image src="/3d_coin.png" alt="Survey Shop" width={150} height={150} />
              <Image src="/3d_pencil.png" alt="Survey Shop" width={100} height={100} />
            </div>
          </div>
        </div>
        {/* Survey List */}
        <div className="bg-white rounded-2xl shadow-lg mt-8 p-8">
          <h4 className="text-xl font-bold mb-4">당신의 관심사에 맞는 설문 조사</h4>
          <div className="flex items-center justify-between mb-2">
            <span className="text-gray-400">순위</span>
            <div className="flex gap-2">
              <input className="bg-gray-100 rounded px-3 py-1 text-sm" placeholder="Search" />
              <select className="bg-gray-100 rounded px-3 py-1 text-sm">
                <option>마감 전</option>
              </select>
            </div>
          </div>
          <div className="divide-y">
            <SurveyListItem 
              title="파인애플 피자의 선호도"
              id="New hong ik"
              date="2025-04-18"
              reward="스타벅스 10장"
              participants={925}
            />
            <SurveyListItem 
              title="생일 선물로 가장 받고 싶은 기프티콘"
              id="Jung sung aha"
              date="2025-05-16"
              reward="$ 45.99"
              participants={375}
            />
          </div>
        </div>
      </main>
    </div>
  );
}

function NavItem({ icon, label, active = false }: { icon: React.ReactNode; label: string; active?: boolean }) {
  return (
    <div
      className={
        `flex items-center justify-center rounded-lg cursor-pointer transition-colors ` +
        `w-12 h-12 px-2 py-2 md:w-auto md:h-auto ` +
        `${active ? 'bg-[#7b61ff] text-white' : 'text-gray-700 hover:bg-gray-100'} ` +
        `md:gap-3 md:px-4 md:py-3 md:font-semibold md:text-base md:justify-start`
      }
    >
      <span className="text-lg md:text-xl">{icon}</span>
      <span className="hidden md:inline">{label}</span>
    </div>
  );
}

function DashboardCard({ icon, title, subtitle, value, valueDesc, valueColor }: { icon: string; title: string; subtitle: string; value: string; valueDesc: string; valueColor: string }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg flex flex-col items-center py-8 px-6">
      <div className="text-4xl mb-2">{icon}</div>
      <div className="text-gray-400 text-xs mb-1">{subtitle}</div>
      <div className="text-base md:text-2xl font-bold mb-1">{title}</div>
      <div className={`text-base md:text-2xl font-bold ${valueColor}`}>{value}</div>
      <div className="text-gray-400 text-xs">{valueDesc}</div>
    </div>
  );
}

function SurveyListItem({ title, id, date, reward, participants }: { title: string; id: string; date: string; reward: string; participants: number }) {
  return (
    <div className="flex items-center justify-between py-4">
      <div className="flex items-center gap-4">
        <div className="w-16 h-16 rounded-xl bg-gradient-to-tr from-blue-400 to-purple-300 flex items-center justify-center">
          <svg width="40" height="40"><circle cx="20" cy="20" r="18" fill="#fff" /></svg>
        </div>
        <div>
          <div className="font-bold text-base mb-1">{title}</div>
          <div className="text-xs text-gray-400">등록인 ID: {id}</div>
        </div>
      </div>
      <div className="flex items-center gap-8">
        <div className="text-sm text-gray-400">{date}</div>
        <div className="text-sm font-bold text-blue-500">{reward}</div>
        <div className="text-sm text-gray-400">{participants}</div>
      </div>
    </div>
  );
}