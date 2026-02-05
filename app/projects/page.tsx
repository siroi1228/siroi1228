"use client"; //

import { useTheme } from '../layout'; //
import Link from 'next/link';
import Image from 'next/image';

export default function ProjectsPage() {
  // toggleTheme을 가져와야 버튼이 작동합니다.
  const { isDark, toggleTheme } = useTheme(); 

  return (
    <main className="min-h-screen p-8 font-sans transition-colors duration-500">
      <div className="max-w-5xl mx-auto">
        
        {/* 상단 네비게이션 및 다크모드 버튼 */}
        <nav className="mb-12 flex justify-between items-center">
          <Link 
            href="/" 
            className={`transition-colors flex items-center gap-2 ${
              isDark ? 'text-slate-400 hover:text-white' : 'text-gray-500 hover:text-black'
            }`}
          >
            ← 메인으로 돌아가기
          </Link>

          {/* 프로젝트 페이지 전용 다크모드 버튼 */}
          <button 
            onClick={toggleTheme}
            className={`relative w-14 h-7 rounded-full transition-colors duration-500 shadow-md ${
              isDark ? 'bg-indigo-600' : 'bg-amber-400'
            }`}
          >
            <div className={`absolute top-1 left-1 w-5 h-5 bg-white rounded-full transition-transform duration-500 flex items-center justify-center text-[10px] ${
              isDark ? 'translate-x-7' : 'translate-x-0'
            }`}>
              {isDark ? '🌙' : '☀️'}
            </div>
          </button>
        </nav>

        {/* 헤더 섹션 */}
        <header className="mb-16">
          <h1 className={`text-5xl font-black mb-4 italic transition-colors ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>
            Featured Projects
          </h1>
          <p className={`text-xl transition-colors ${
            isDark ? 'text-slate-400' : 'text-gray-600'
          }`}>
            Next.js와 Tailwind CSS로 구축한 저의 첫 디지털 작업물들입니다.
          </p>
        </header>

        {/* 프로젝트 그리드 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          
          {/* 프로젝트 1: 현재 이 웹사이트 */}
          <div className="group cursor-pointer">
            <div className="relative h-64 w-full overflow-hidden rounded-3xl mb-6 shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-purple-600 opacity-80 group-hover:scale-110 transition-transform duration-500" />
              <div className="absolute inset-0 flex items-center justify-center text-white font-bold text-lg">My First Portfolio</div>
            </div>
            <div className="flex justify-between items-start mb-2">
              <h2 className={`text-2xl font-bold transition-colors ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>
                Personal Portfolio Web
              </h2>
              <span className={`text-sm px-3 py-1 rounded-full uppercase tracking-widest font-bold ${
                isDark ? 'bg-white text-black' : 'bg-black text-white'
              }`}>
                2026
              </span>
            </div>
            <p className={`mb-4 transition-colors ${
              isDark ? 'text-slate-400' : 'text-gray-600'
            }`}>
              사용자 경험을 고려한 깔끔한 UI와 Next.js App Router를 활용한 빠른 페이지 전환이 특징인 웹사이트입니다.
            </p>
            <div className="flex gap-3 text-sm font-medium text-gray-400">
              <span>#Next.js</span> <span>#TailwindCSS</span> <span>#Vercel</span>
            </div>
          </div>

          {/* 프로젝트 2: 향후 추가할 프로젝트 */}
          <div className={`group cursor-pointer transition-colors ${
            isDark ? 'text-slate-500' : 'text-gray-400'
          }`}>
            <div className={`h-64 w-full rounded-3xl border-2 border-dashed mb-6 flex items-center justify-center transition-colors ${
              isDark ? 'border-slate-700 bg-slate-800/30' : 'border-gray-200 bg-gray-50'
            }`}>
              <span className="text-lg">Coming Soon...</span>
            </div>
            <div className="flex justify-between items-start mb-2">
              <h2 className={`text-2xl font-bold italic ${isDark ? 'text-slate-200' : 'text-gray-900'}`}>Next Big Thing</h2>
              <span className={`text-sm border px-3 py-1 rounded-full uppercase tracking-widest font-bold ${
                isDark ? 'border-slate-700' : 'border-gray-200'
              }`}>
                Planned
              </span>
            </div>
            <p className="mb-4 text-sm font-light">두 번째 프로젝트는 API를 활용한 실시간 데이터 대시보드를 계획하고 있습니다.</p>
          </div>

        </div>

        {/* 하단 푸터 섹션 */}
        <footer className={`mt-32 pt-12 border-t text-center transition-colors ${
          isDark ? 'border-slate-800' : 'border-gray-100'
        }`}>
          <p className="text-gray-400 mb-4">함께 일하고 싶으신가요?</p>
          <a 
            href="https://open.kakao.com/o/s2ks3y9h" 
            target="_blank" 
            rel="noopener noreferrer" 
            className={`text-2xl font-bold hover:underline transition-colors flex items-center justify-center gap-2 ${
              isDark ? 'text-yellow-400 hover:text-yellow-300' : 'text-black hover:text-yellow-600'
            }`}
          >
            <span className="text-xl">💬</span> Let's talk
          </a>
        </footer>
      </div>
    </main>
  );
}