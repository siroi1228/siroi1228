"use client";

import { useTheme } from './layout'; // 전역 테마 불러오기
import Link from 'next/link';
import Weather from '../components/weather'; // 1. import는 반드시 최상단으로!

export default function Home() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <main className={`min-h-screen transition-all duration-700 ease-in-out p-8 ${
      isDark ? 'bg-[#0f172a] text-slate-100' : 'bg-gray-50 text-slate-900'
    }`}>
      <div className="max-w-6xl mx-auto">
        
        {/* 상단 헤더 및 다크모드 토글 버튼 */}
        <div className="flex justify-between items-center mb-16 border-b pb-6 border-gray-200 dark:border-slate-700">
          <h2 className="text-3xl font-black italic tracking-tighter">나의 2026 포트폴리오</h2>
          
          <button 
            onClick={toggleTheme}
            className={`relative w-16 h-8 rounded-full transition-colors duration-500 shadow-inner ${
              isDark ? 'bg-indigo-600' : 'bg-amber-400'
            }`}
          >
            <div className={`absolute top-1 left-1 w-6 h-6 bg-white rounded-full transition-transform duration-500 flex items-center justify-center text-xs shadow-md ${
              isDark ? 'translate-x-8' : 'translate-x-0'
            }`}>
              {isDark ? '🌙' : '☀️'}
            </div>
          </button>
        </div>

        {/* 2. 날씨 섹션 배치 */}
        <section className="mb-10">
          <Weather />
        </section>

        {/* 자기소개 섹션 시작 */}
        <section className="mb-20 mt-10">
          <h2 className={`text-5xl md:text-7xl font-black tracking-tighter mb-6 transition-colors ${
            isDark ? 'text-white' : 'text-slate-900'
          }`}>
            안녕하세요, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-600 animate-gradient">
              AI와 웹전문가를 꿈꾸는 개발지망생
            </span>입니다.
          </h2>

          <p className={`text-xl md:text-2xl leading-relaxed max-w-3xl transition-colors ${
            isDark ? 'text-slate-400' : 'text-slate-600'
          }`}>
            NEXT.js와 LLM을 이용하여<br className="hidden md:block" />
            단순한 AI와 웹개발을 넘어 AI와 웹개발을 함께하여 다양한 경험을 설계하는 것을 즐깁니다.
          </p>

          <div className="flex gap-3 mt-8 flex-wrap">
            {['#React', '#Next.js', '#TypeScript', '#Tailwind', '#Gemini','#ChatGPT'].map((tech) => (
              <span key={tech} className={`px-4 py-1.5 rounded-full text-sm font-bold transition-all ${
                isDark 
                  ? 'bg-slate-800 text-slate-300 border border-slate-700' 
                  : 'bg-blue-50 text-blue-600 border border-blue-100'
              }`}>
                {tech}
              </span>
            ))}
          </div>
        </section>

        {/* 카드 그리드 컨테이너 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* 카드 1: 새해 목표 */}
          <div className={`group p-8 rounded-[2rem] border transition-all duration-500 flex flex-col h-full ${
            isDark ? 'bg-slate-800/50 border-slate-700 hover:border-indigo-500 hover:shadow-[0_0_30px_-10px_rgba(99,102,241,0.5)]' : 'bg-white border-gray-100 shadow-lg hover:shadow-2xl hover:border-blue-200'
          }`}>
            <div className="mb-6">
              <span className="text-4xl mb-4 block group-hover:scale-110 transition-transform">🔥</span>
              <h3 className={`text-2xl font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-800'}`}>2026년 목표</h3>
              <p className={isDark ? 'text-slate-400' : 'text-gray-500'}>더 나은 개발자가 되기 위한 올해의 다짐들입니다.</p>
            </div>
            <Link href="/goals" className="mt-auto">
              <button className="w-full bg-blue-600 text-white py-3 rounded-xl font-bold hover:bg-blue-700 transition-colors shadow-lg">목표 상세보기</button>
            </Link>
          </div>

          {/* 카드 2: 프로젝트 */}
          <div className={`group p-8 rounded-[2rem] border transition-all duration-500 flex flex-col h-full ${
            isDark ? 'bg-slate-800/50 border-slate-700 hover:border-emerald-500 hover:shadow-[0_0_30px_-10px_rgba(16,185,129,0.5)]' : 'bg-white border-gray-100 shadow-lg hover:shadow-2xl hover:border-emerald-200'
          }`}>
            <div className="mb-6">
              <span className="text-4xl mb-4 block group-hover:scale-110 transition-transform">💻</span>
              <h3 className={`text-2xl font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-800'}`}>나의 프로젝트</h3>
              <p className={isDark ? 'text-slate-400' : 'text-gray-500'}>Next.js로 만든 첫 웹사이트 프로젝트 결과물입니다.</p>
            </div>
            <Link href="/projects" className="mt-auto">
              <button className="w-full bg-emerald-600 text-white py-3 rounded-xl font-bold hover:bg-emerald-700 transition-colors shadow-lg">프로젝트 보기</button>
            </Link>
          </div>

          {/* 카드 4: 나의 블로그 */}
          <div className={`group p-8 rounded-[2rem] border transition-all duration-500 flex flex-col h-full ${
            isDark ? 'bg-slate-800/50 border-slate-700 hover:border-orange-500 hover:shadow-[0_0_30px_-10px_rgba(249,115,22,0.5)]' : 'bg-white border-gray-100 shadow-lg hover:shadow-2xl hover:border-orange-200'
          }`}>
            <div className="mb-6 text-center md:text-left">
              <span className="text-5xl mb-6 block group-hover:scale-110 transition-transform">✍️</span>
              <h3 className={`text-2xl font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-800'}`}>나의 26년 스터디 블로그</h3>
              <p className={isDark ? 'text-slate-400' : 'text-gray-500'}>공부한 내용과 일상을 기록하는 티스토리 블로그입니다.</p>
            </div>
            <a href="https://note82441.tistory.com/" target="_blank" rel="noopener noreferrer" className="mt-auto">
              <button className="w-full bg-orange-500 text-white py-4 rounded-2xl font-black hover:bg-orange-600 transition-colors shadow-lg">블로그 방문하기 →</button>
            </a>
          </div>

          {/* 카드 3: 학습 기록 */}
          <div className={`group p-8 rounded-[2rem] border transition-all duration-500 flex flex-col h-full ${
            isDark ? 'bg-slate-800/50 border-slate-700 hover:border-purple-500 hover:shadow-[0_0_30px_-10px_rgba(168,85,247,0.5)]' : 'bg-white border-gray-100 shadow-lg hover:shadow-2xl hover:border-purple-200'
          }`}>
            <div className="mb-6">
              <span className="text-4xl mb-4 block group-hover:scale-110 transition-transform">📚</span>
              <h3 className={`text-2xl font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-800'}`}>학습 및 커밋</h3>
              <p className={isDark ? 'text-slate-400' : 'text-gray-500'}>매일 성장하는 개발자의 공부 기록을 확인하세요.</p>
            </div>
            <Link href="/study" className="mt-auto">
              <button className="w-full bg-purple-600 text-white py-3 rounded-xl font-bold hover:bg-purple-700 transition-colors shadow-lg">학습기록 보기</button>
            </Link>
          </div>

          {/* 카드 5: 경력 및 이력 */}
          <div className={`group p-8 rounded-[2rem] border transition-all duration-500 flex flex-col h-full ${
            isDark ? 'bg-slate-800/50 border-slate-700 hover:border-pink-500 hover:shadow-[0_0_30px_-10px_rgba(236,72,153,0.5)]' : 'bg-white border-gray-100 shadow-lg hover:shadow-2xl hover:border-pink-200'
          }`}>
            <div className="mb-6">
              <span className="text-5xl mb-6 block group-hover:scale-110 transition-transform">🏆</span>
              <h3 className={`text-2xl font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-800'}`}>경력 및 이력</h3>
              <p className={isDark ? 'text-slate-400' : 'text-gray-500'}>지금까지 걸어온 길과 주요 활동 기록입니다.</p>
            </div>
            <Link href="/career" className="mt-auto">
              <button className="w-full bg-pink-500 text-white py-4 rounded-2xl font-black hover:bg-pink-600 transition-all shadow-lg">이력 확인하기 →</button>
            </Link>
          </div>

          {/* 카드 6: 유튜브 채널 */}
          <div className={`group p-8 rounded-[2rem] border transition-all duration-500 flex flex-col h-full ${
            isDark ? 'bg-slate-800/50 border-slate-700 hover:border-red-500 hover:shadow-[0_0_30px_-10px_rgba(239,68,68,0.5)]' : 'bg-white border-gray-100 shadow-lg hover:shadow-2xl hover:border-red-200'
          }`}>
            <div className="mb-6">
              <span className="text-5xl mb-6 block group-hover:scale-110 transition-transform">📺</span>
              <h3 className={`text-2xl font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-800'}`}>나의 유튜브</h3>
              <p className={isDark ? 'text-slate-400' : 'text-gray-500'}>영상으로 기록하는 개발 및 일상 이야기입니다.</p>
            </div>
            <Link href="/youtube" className="mt-auto">
              <button className="w-full bg-red-600 text-white py-4 rounded-2xl font-black hover:bg-red-700 transition-all shadow-lg">영상 보러가기 →</button>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}