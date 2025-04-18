import React from "react";
import { FaHome, FaQuestionCircle, FaChartBar, FaListAlt, FaUser, FaRegLifeRing } from "react-icons/fa";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen bg-[#f7f9fb]">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-lg flex flex-col justify-between py-8 px-6 min-h-screen">
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
        <button className="bg-gradient-to-r from-purple-400 to-blue-400 text-white rounded-xl py-4 px-3 text-lg font-bold shadow-md flex flex-col items-center gap-1">
          설문조사하고 <br /> 상품 받아가기
          <span className="mt-1 bg-white text-blue-500 rounded px-3 py-1 text-xs font-bold">Get it Now!</span>
        </button>
      </aside>
      {/* Main Content */}
      <main className="flex-1 p-10 flex flex-col gap-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex gap-3">
            <button className="bg-gray-200 rounded px-4 py-2 font-semibold">Sign in</button>
            <button className="bg-[#7b61ff] text-white rounded px-4 py-2 font-semibold">Register</button>
          </div>
          <div className="relative">
            <input className="bg-gray-100 rounded-full px-4 py-2 pl-10 w-64 focus:outline-none" placeholder="Search" />
            <svg className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>
          </div>
        </div>
        {/* Dashboard Cards */}
        <div className="grid grid-cols-3 gap-6 mb-8">
          <DashboardCard icon="💵" title="질문 등록" subtitle="Earning" value="37.8%" valueDesc="응답자 수 증가" valueColor="text-green-500" />
          <DashboardCard icon="🧑‍💻" title="결과 보기" subtitle="Balance" value="250명" valueDesc="조사 완료" valueColor="text-red-500" />
          <DashboardCard icon="🛍️" title="내 정보" subtitle="Total Sales" value="11%" valueDesc="this week" valueColor="text-green-500" />
        </div>
        {/* Main Dashboard Section */}
        <div className="flex gap-8">
          {/* Popular Survey Card */}
          <div className="bg-white rounded-2xl shadow-lg flex-1 p-8 flex flex-col items-center">
            <h2 className="text-2xl font-bold mb-2">지금 가장 인기있는 설문 조사?</h2>
            <p className="text-gray-500 mb-4">홍대생이 뽑은 맛집 순위</p>
            {/* Chart Placeholder */}
            <div className="flex items-center mb-4 gap-8">
              <svg width="120" height="120">
                <circle cx="60" cy="60" r="54" fill="#f3f3f3" />
                <path d="M60 6 a54 54 0 1 1 -38.18 92.18" fill="none" stroke="#e97ad9" strokeWidth="12" />
                <text x="50%" y="58%" textAnchor="middle" fontSize="28" fontWeight="bold" fill="#171717">65%</text>
                <text x="50%" y="67%" textAnchor="middle" fontSize="12" fill="#888"></text>
              </svg>
              <div className="flex flex-col items-center gap-1">
                <span className="text-lg font-bold">1위</span>
                <span className="text-lg font-bold">2위</span>
                <span className="text-lg font-bold">3위</span>
              </div>
            </div>
          </div>
          {/* Survey Shop */}
          <div className="bg-white rounded-2xl shadow-lg w-80 p-8 flex flex-col items-center">
            <h3 className="text-xl font-bold mb-2">SURVEY SHOP</h3>
            <p className="text-gray-400 text-sm mb-8">Customers that buy products</p>
            <div className="flex items-center justify-center pb-4">
              <Image src="/3d_coin.png" alt="Survey Shop" width={150} height={150} />
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
    <div className={`flex items-center gap-3 px-4 py-3 rounded-lg cursor-pointer font-semibold text-base transition-colors ${active ? "bg-[#7b61ff] text-white" : "text-gray-700 hover:bg-gray-100"}`}>
      <span className="text-lg">{icon}</span>
      <span>{label}</span>
    </div>
  );
}

function DashboardCard({ icon, title, subtitle, value, valueDesc, valueColor }: { icon: string; title: string; subtitle: string; value: string; valueDesc: string; valueColor: string }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg flex flex-col items-center py-8 px-6">
      <div className="text-4xl mb-2">{icon}</div>
      <div className="text-gray-400 text-xs mb-1">{subtitle}</div>
      <div className="text-xl font-bold mb-1">{title}</div>
      <div className={`text-2xl font-bold ${valueColor}`}>{value}</div>
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