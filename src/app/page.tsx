"use client";
import React, { useState } from "react";
import { AiOutlineLike, AiOutlineComment, AiOutlineRetweet, AiOutlineShareAlt } from "react-icons/ai";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// 투표 항목 타입
const initialThreads = [
  {
    id: 1,
    author: "_dolili__",
    date: "2024-08-23",
    poll: {
      question: "투표기능 이건가",
      options: ["맞나요??", "아니요"],
      votes: [1, 0],
      ended: true,
    },
    comments: [
      {
        id: 1,
        author: "goat.ronaldo",
        date: "2024-08-23",
        text: "정답-!",
        image: "/yes.jpg",
      },
    ],
    likes: 1,
    reposts: 0,
    shares: 0,
  },
  // 추가 Thread 예시
  {
    id: 2,
    author: "hungryguy2",
    date: "2024-08-24",
    poll: {
      question: "오늘 저녁 뭐 먹을까?",
      options: ["피자", "치즈볼", "볶음밥"],
      votes: [0, 0, 0],
      ended: false,
    },
    comments: [],
    likes: 0,
    reposts: 0,
    shares: 0,
  },
];

// 토큰 모드에서만 보여줄 스레드 데이터
const tokenThreads = [
  {
    id: 999,
    author: "TokenBot",
    date: new Date().toISOString().split('T')[0],
    poll: {
      question: "비즈니스 투표를 통해 토큰을 얻어보세요!",
      options: ["토큰 획득", "싫어요"],
      votes: [0, 0],
      ended: false,
    },
    comments: [],
    likes: 0,
    reposts: 0,
    shares: 0,
  }
];

// 타입 정의
interface Poll {
  question: string;
  options: string[];
  votes: number[];
  ended: boolean;
}

interface Comment {
  id: number;
  author: string;
  date: string;
  text: string;
  image?: string;
}

interface ThreadType {
  id: number;
  author: string;
  date: string;
  poll: Poll;
  comments: Comment[];
  likes: number;
  reposts: number;
  shares: number;
}

// 프로필 이미지 경로
const PROFILE_IMG = "/vercel.svg";
const COMMENT_IMG = "/yes.jpg"; // public 폴더에 comment-img.svg 있다고 가정

function Thread({
  thread,
  isBusiness,
  onVote,
  onLike,
  onRepost,
  onShare,
  onComment,
}: {
  thread: ThreadType;
  isBusiness: boolean;
  onVote: (threadId: number, optionIdx: number) => void;
  onLike: (threadId: number) => void;
  onRepost: (threadId: number) => void;
  onShare: (threadId: number) => void;
  onComment: (threadId: number, text: string) => void;
}) {
  const [comment, setComment] = useState("");
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <div className={`rounded-xl shadow p-4 mb-6 w-full max-w-xl mx-auto ${isBusiness ? 'bg-purple-50' : 'bg-white'}`}>
      <div className="flex items-center mb-2">
        <img src={PROFILE_IMG} alt="profile" className="w-8 h-8 rounded-full mr-2 bg-gray-200" />
        <div>
          <span className="font-bold">{thread.author}</span>
          <span className="text-xs text-gray-400 ml-2">{thread.date}</span>
        </div>
      </div>
      {/* 투표 */}
      <div className="mb-2">
        <div className="font-semibold mb-1">{thread.poll.question}</div>
        <div className="flex flex-col gap-2">
          {thread.poll.options.map((opt: string, idx: number) => (
            <div
              key={idx}
              className={`w-full rounded-lg px-4 py-3 cursor-pointer border transition-all flex items-center justify-between
                ${selected === idx ? "bg-blue-500 text-white border-blue-500" : "bg-gray-100 text-gray-800 border-gray-200"}
                ${thread.poll.ended ? "opacity-60 cursor-not-allowed" : "hover:bg-blue-100"}
              `}
              onClick={() => {
                if (!thread.poll.ended) setSelected(idx);
              }}
            >
              <span>{opt}</span>
              <span className="text-xs ml-2">{thread.poll.votes[idx]}표</span>
            </div>
          ))}
        </div>
        <button
          className="mt-3 px-3 py-1 bg-blue-500 text-white rounded disabled:bg-gray-300"
          disabled={thread.poll.ended || selected === null}
          onClick={() => onVote(thread.id, selected!)}
        >
          투표하기
        </button>
        {thread.poll.ended && (
          <div className="text-xs text-gray-400 mt-1">설문 종료됨</div>
        )}
      </div>
      {/* 버튼들 */}
      <div className="flex space-x-4 mb-2">
        <button onClick={() => onLike(thread.id)} className="flex items-center space-x-1">
          <AiOutlineLike size={20} />
          <span>{thread.likes}</span>
        </button>
        <button onClick={() => onComment(thread.id, comment)} className="flex items-center space-x-1">
          <AiOutlineComment size={20} />
          <span>{thread.comments.length}</span>
        </button>
        <button onClick={() => onRepost(thread.id)} className="flex items-center space-x-1">
          <AiOutlineRetweet size={20} />
          <span>{thread.reposts}</span>
        </button>
        <button onClick={() => onShare(thread.id)} className="flex items-center space-x-1">
          <AiOutlineShareAlt size={20} />
          <span>{thread.shares}</span>
        </button>
      </div>
      {/* 댓글 리스트 */}
      <div className="mb-2">
        {thread.comments.map((c: Comment) => (
          <div key={c.id} className="flex items-start mb-2">
            <img src={COMMENT_IMG} alt="comment-img" className="w-7 h-7 rounded-full mr-2 bg-gray-100" />
            <div>
              <div className="text-sm font-semibold">{c.author} <span className="text-xs text-gray-400">{c.date}</span></div>
              <div className="text-sm">{c.text}</div>
              {c.image && (
                <img src={c.image} alt="comment-img" className="mt-1 w-32 rounded" />
              )}
            </div>
          </div>
        ))}
      </div>
      {/* 댓글 입력 */}
      <div className="flex items-center mt-2">
        <input
          type="text"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="댓글을 입력하세요..."
          className="flex-1 border rounded px-2 py-1 mr-2"
        />
        <button
          onClick={() => {
            onComment(thread.id, comment);
            setComment("");
          }}
          className="px-3 py-1 bg-gray-200 rounded"
        >
          등록
        </button>
      </div>
    </div>
  );
}

export default function Page() {
  const [threads, setThreads] = useState<ThreadType[]>(initialThreads);
  const [businessThreads, setBusinessThreads] = useState<ThreadType[]>(tokenThreads);
  const [token, setToken] = useState(100);
  const [showTokenNotification, setShowTokenNotification] = useState(false);

  // 새 투표 폼 상태
  const [newQuestion, setNewQuestion] = useState("");
  const [newOptions, setNewOptions] = useState(["", ""]);

  // 스레드 업데이트 유틸리티 함수
  const updateThread = (threads: ThreadType[], threadId: number, updater: (thread: ThreadType) => ThreadType) => {
    return threads.map(t => t.id === threadId ? updater(t) : t);
  };

  // 투표
  const handleVote = (threadId: number, optionIdx: number, isBusiness = false) => {
    const updater = (t: ThreadType) => ({
      ...t,
      poll: {
        ...t.poll,
        votes: t.poll.votes.map((v, i) => (i === optionIdx ? v + 1 : v)),
      },
    });
    
    if (isBusiness) {
      setBusinessThreads(prev => updateThread(prev, threadId, updater));
      setToken(prev => prev + 50);
      setShowTokenNotification(true);
      setTimeout(() => setShowTokenNotification(false), 3000);
    } else {
      setThreads(prev => updateThread(prev, threadId, updater));
    }
  };

  // 좋아요
  const handleLike = (threadId: number, isBusiness = false) => {
    const updater = (t: ThreadType) => ({ ...t, likes: t.likes + 1 });
    
    if (isBusiness) {
      setBusinessThreads(prev => updateThread(prev, threadId, updater));
    } else {
      setThreads(prev => updateThread(prev, threadId, updater));
    }
  };

  // 리포스트
  const handleRepost = (threadId: number, isBusiness = false) => {
    const updater = (t: ThreadType) => ({ ...t, reposts: t.reposts + 1 });
    
    if (isBusiness) {
      setBusinessThreads(prev => updateThread(prev, threadId, updater));
    } else {
      setThreads(prev => updateThread(prev, threadId, updater));
    }
  };

  // 공유
  const handleShare = (threadId: number, isBusiness = false) => {
    const updater = (t: ThreadType) => ({ ...t, shares: t.shares + 1 });
    
    if (isBusiness) {
      setBusinessThreads(prev => updateThread(prev, threadId, updater));
    } else {
      setThreads(prev => updateThread(prev, threadId, updater));
    }
  };

  // 댓글
  const handleComment = (threadId: number, text: string, isBusiness = false) => {
    if (!text.trim()) return;
    
    const newComment = {
      id: Date.now(),
      author: "현재사용자",
      date: new Date().toISOString().split("T")[0],
      text,
    };

    const updater = (t: ThreadType) => ({
      ...t,
      comments: [...t.comments, newComment],
    });
    
    if (isBusiness) {
      setBusinessThreads(prev => updateThread(prev, threadId, updater));
    } else {
      setThreads(prev => updateThread(prev, threadId, updater));
    }
  };

  // 새 투표 생성
  const handleCreatePoll = () => {
    if (!newQuestion.trim() || newOptions.some((opt) => !opt.trim()) || newOptions.length < 2) return;
    const newThread: ThreadType = {
      id: Date.now(),
      author: "me",
      date: new Date().toISOString().slice(0, 10),
      poll: {
        question: newQuestion,
        options: newOptions,
        votes: newOptions.map(() => 0),
        ended: false,
      },
      comments: [],
      likes: 0,
      reposts: 0,
      shares: 0,
    };
    setThreads((prev) => [newThread, ...prev]);
    setNewQuestion("");
    setNewOptions(["", ""]);
  };

  // 옵션 추가/삭제
  const handleOptionChange = (idx: number, value: string) => {
    setNewOptions((opts) => opts.map((opt, i) => (i === idx ? value : opt)));
  };
  const handleAddOption = () => {
    if (newOptions.length < 4) setNewOptions((opts) => [...opts, ""]);
  };
  const handleRemoveOption = (idx: number) => {
    if (newOptions.length > 2) setNewOptions((opts) => opts.filter((_, i) => i !== idx));
  };

  const [themeMode, setThemeMode] = useState<'default' | 'token'>('default');

  return (
    <>
      {showTokenNotification && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-opacity-50">
          <div className="flex flex-col items-center justify-between bg-white p-8 rounded-2xl shadow-md text-center h-64 w-72 md:h-96 md:w-100">
            <div className="flex justify-center mb-4">
              <Image 
                src="/grats.gif" 
                alt="token-img" 
                width={120} 
                height={120}
                className="rounded-lg w-24 h-24 md:w-48 md:h-48"
              />
            </div>
            <div className="text-md md:text-2xl font-bold text-gray-800 mb-4">
              축하합니다! <br />50 토큰을 획득하셨습니다!
            </div>
          </div>
        </div>
      )}
      <Header 
        themeMode={themeMode} 
        onThemeChange={(mode) => setThemeMode(mode)} 
        token={token}
      />
      <main className="min-h-screen bg-gray-50 pb-20 py-8">
        {themeMode === 'default' ? (
          <>
            {/* 기본 모드: 투표 폼과 일반 스레드 */}
            <div className="w-full max-w-xl mx-auto bg-white rounded-xl shadow p-4 mb-8">
              <div className="font-bold text-lg mb-2">새 투표 시작</div>
              <textarea
                value={newQuestion}
                onChange={(e) => setNewQuestion(e.target.value)}
                placeholder="질문을 입력하세요..."
                className="w-full border rounded px-3 py-2 mb-3 min-h-[60px] resize-none"
              />
              <div className="flex flex-col gap-2 mb-3">
                {newOptions.map((opt, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <input
                      type="text"
                      value={opt}
                      onChange={(e) => handleOptionChange(idx, e.target.value)}
                      placeholder={`옵션 ${idx + 1}`}
                      className="flex-1 border rounded px-2 py-1"
                    />
                    {newOptions.length > 2 && (
                      <button
                        onClick={() => handleRemoveOption(idx)}
                        className="text-red-400 px-2 py-1"
                        type="button"
                      >
                        삭제
                      </button>
                    )}
                  </div>
                ))}
              </div>
              <div className="flex gap-2">
                <button
                  onClick={handleAddOption}
                  disabled={newOptions.length >= 4}
                  className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50 cursor-pointer"
                  type="button"
                >
                  옵션 추가
                </button>
                <button
                  onClick={handleCreatePoll}
                  disabled={!newQuestion.trim() || newOptions.some((opt) => !opt.trim())}
                  className="px-4 py-1 bg-blue-500 text-white rounded disabled:bg-gray-300 cursor-pointer"
                  type="button"
                >
                  투표 생성
                </button>
              </div>
            </div>
            {/* 일반 스레드 리스트 */}
            <div className="flex flex-col items-center">
              {threads.map((thread) => (
                <Thread
                  key={thread.id}
                  thread={thread}
                  isBusiness={false}
                  onVote={(id, idx) => handleVote(id, idx, false)}
                  onLike={(id) => handleLike(id, false)}
                  onRepost={(id) => handleRepost(id, false)}
                  onShare={(id) => handleShare(id, false)}
                  onComment={(id, text) => handleComment(id, text, false)}
                />
              ))}
            </div>
          </>
        ) : (
          // 토큰 모드: 토큰 전용 스레드만 표시
          <div className="flex flex-col items-center">
            {businessThreads.map((thread) => (
              <Thread
                key={thread.id}
                thread={thread}
                isBusiness={true}
                onVote={(id, idx) => handleVote(id, idx, true)}
                onLike={(id) => handleLike(id, true)}
                onRepost={(id) => handleRepost(id, true)}
                onShare={(id) => handleShare(id, true)}
                onComment={(id, text) => handleComment(id, text, true)}
              />
            ))}
          </div>
        )}
        {/* Footer 네비게이션 바 */}
        <Footer themeMode={themeMode} />
      </main>
    </>
  );
}
