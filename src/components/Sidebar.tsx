"use client"
import { FaHome, FaQuestionCircle, FaChartBar, FaListAlt, FaUser, FaRegLifeRing } from "react-icons/fa";
import { usePathname, useRouter } from "next/navigation";

export const Sidebar = () => {
  const pathname = usePathname();
  const router = useRouter();
  // 각 NavItem의 경로 정의
  const navItems = [
    { icon: <FaHome />, label: "HOME", path: "/" },
    { icon: <FaQuestionCircle />, label: "질문 등록하기", path: "/ask" },
    { icon: <FaChartBar />, label: "현재 진행 중인 조사", path: "/progress" },
    { icon: <FaListAlt />, label: "나의 설문", path: "/my-surveys" },
    { icon: <FaUser />, label: "내 정보", path: "/myinfo" },
    { icon: <FaRegLifeRing />, label: "Help", path: "/help" },
  ];

  return (
    <aside className="hidden md:flex w-64 bg-white shadow-lg flex-col justify-between py-8 px-6 min-h-screen">
            <div>
              {/* Logo */}
              <div className="flex items-center gap-2 mb-8">
                <span className="font-bold text-xl">SURVEY</span>
              </div>
              {/* Nav */}
              <nav className="flex flex-col gap-2">
                {navItems.map(item => (
                  <NavItem
                    key={item.label}
                    icon={item.icon}
                    label={item.label}
                    active={pathname === item.path}
                    path={item.path}
                  />
                ))}
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
    )
}


function NavItem({ icon, label, active = false, path }: { icon: React.ReactNode; label: string; active?: boolean; path: string }) {
    const router = useRouter();

    return (
      <div
        className={
          `flex items-center justify-center rounded-lg cursor-pointer transition-colors ` +
          `w-12 h-12 px-2 py-2 md:w-auto md:h-auto ` +
          `${active ? 'bg-[#7b61ff] text-white' : 'text-gray-700 hover:bg-gray-100'} ` +
          `md:gap-3 md:px-4 md:py-3 md:font-semibold md:text-base md:justify-start`
        }
        onClick={() => router.push(path)}
      >
        <span className="text-lg md:text-xl">{icon}</span>
        <span className="hidden md:inline">{label}</span>
      </div>
    );
}