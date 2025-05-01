import React from "react";
import { FaHome, FaQuestionCircle, FaChartBar, FaListAlt, FaUser, FaRegLifeRing } from "react-icons/fa";
import Image from "next/image";
import DonutChart from "./DonutChart";

const surveyRanking = [
  { rank: 1, name: '라멘트럭' },
  { rank: 2, name: '도삭면' },
  { rank: 3, name: '치즈돈까스' },
];

const surveyList = [
  {
    title: '파인애플 피자의 선호도',
    id: 'New Hong IK',
    date: '2025-04-18',
    reward: '스타벅스 10장',
    participants: 925,
    image: '/pizza.jpg',
  },
  {
    title: '생일 선물로 가장 받고 싶은 기프티콘',
    id: 'Jung sung aha',
    date: '2025-05-16',
    reward: 'CGV 관람권 20장',
    participants: 375,
    image: '/gifticon.jpg',
  },
];

export default function Home() {
  return (
    <div className="flex min-h-screen bg-[#f7f9fb]">
      {/* Sidebar (Desktop) */}
      <aside className="hidden md:flex w-64 bg-white shadow-lg flex-col justify-between py-8 px-6 min-h-screen">
        <div>
          {/* Logo */}
          <div className="flex items-center gap-2 mb-8">
            <span className="font-bold text-xl">SURVEY</span>
          </div>
          {/* Nav */}
          <nav className="flex flex-col gap-2">
            <NavItem icon={<FaHome />} label="HOME" active />
            <NavItem icon={<FaQuestionCircle />} label="질문 등록하기" />
            <NavItem icon={<FaChartBar />} label="현재 진행 중인 조사" />
            <NavItem icon={<FaListAlt />} label="나의 설문" />
            <NavItem icon={<FaUser />} label="내 정보" />
            <NavItem icon={<FaRegLifeRing />} label="Help" />
          </nav>
        </div>
        <div className="flex flex-col gap-4">
          {/* CTA Button */}
          <button className="bg-gradient-to-r from-purple-400 to-blue-400 text-white rounded-xl py-4 px-3 text-lg font-bold shadow-md flex flex-col items-center gap-1">
            설문조사하고 <br /> 상품 받아가기
            <span className="mt-1 bg-white text-blue-500 rounded px-3 py-1 text-xs font-bold">Get it Now!</span>
          </button>
          {/* Log out */}
          <button className="bg-gray-100 rounded py-2 font-semibold text-gray-500 mt-4">Log out</button>
          {/* User Profile */}
          <div className="flex items-center gap-3 mt-4">
            <img src="/user.png" alt="User" className="w-10 h-10 rounded-full border" />
            <div>
              <div className="font-bold text-sm">User</div>
              <div className="text-xs text-gray-400">ID</div>
            </div>
          </div>
        </div>
      </aside>
      {/* Main Content */}
      <main className="flex-1 w-full max-w-full p-4 md:p-8 flex flex-col gap-8 overflow-x-hidden">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6 mt-2 md:mt-0">
          <div className="text-2xl font-semibold mb-2 md:mb-0">Hello User’s name <span className="text-lg">👋🏻</span></div>
          <div className="relative w-full md:w-72">
            <input className="bg-gray-100 rounded-full px-3 py-2 pl-9 w-full text-base focus:outline-none" placeholder="Search" />
            <svg className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>
          </div>
        </div>
        {/* Dashboard Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <DashboardCard icon={<FaQuestionCircle className="text-green-500 text-3xl" />} title="질문 등록" subtitle="Register a question" value="37.8%" valueDesc="방문자 수 증가" valueColor="text-green-500" />
          <DashboardCard icon={<FaChartBar className="text-blue-500 text-3xl" />} title="결과 보기" subtitle="View results" value="250명" valueDesc="조사 완료" valueColor="text-red-500" />
          <DashboardCard icon={<FaUser className="text-pink-400 text-3xl" />} title="내 정보" subtitle="My account" value="11%" valueDesc="응답 랭킹 11% 상승" valueColor="text-green-500" />
        </div> 
        {/* Main Dashboard Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Popular Survey Card */}
          <div className="bg-white rounded-2xl shadow-lg flex flex-col items-center w-full col-span-2 p-8">
            <h2 className="text-2xl font-bold mb-2">지금 가장 인기있는 설문 조사?</h2>
            <div className="flex flex-col md:flex-row items-center gap-8 w-full">
              <div className="relative flex flex-col items-center">
                <DonutChart value={70} />
                <div className="absolute top-16 left-1/2 -translate-x-1/2 text-center">
                  <div className="text-lg font-semibold">350<br /><span className="text-xs text-gray-400">Number of respondents</span></div>
                </div>
              </div>
              <div className="flex flex-col justify-center items-center flex-1">
                <div className="text-lg text-gray-700 mb-2">홍대생이 뽑은 맛집 순위</div>
                {surveyRanking.map((item) => (
                  <div key={item.rank} className="text-2xl font-bold text-gray-800">{item.rank}위 {item.name}</div>
                ))}
              </div>
            </div>
          </div>
          {/* Survey Shop */}
          <div className="bg-white rounded-2xl shadow-lg w-full p-8 flex flex-col items-center">
            <h3 className="text-xl font-bold mb-2">SURVEY SHOP</h3>
            <p className="text-gray-400 text-sm mb-8">You can purchase survey results</p>
            <div className="flex items-center justify-center pb-4">
              <Image src="/3d_coin.png" alt="Survey Shop" width={150} height={150} />
              <Image src="/3d_pencil.png" alt="Survey Shop" width={150} height={150} />
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
            {surveyList.map((item, idx) => (
              <SurveyListItem 
                key={idx}
                title={item.title}
                id={item.id}
                date={item.date}
                reward={item.reward}
                participants={item.participants}
                image={item.image}
              />
            ))}
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

function SurveyListItem({ title, id, date, reward, participants, image }: { title: string; id: string; date: string; reward: string; participants: number; image: string }) {
  return (
    <div className="flex items-center justify-between py-4">
      <div className="flex items-center gap-4">
        <div className="w-16 h-16 rounded-xl overflow-hidden bg-gray-100 flex items-center justify-center">
          <img src={image} alt="survey" className="object-cover w-full h-full" />
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