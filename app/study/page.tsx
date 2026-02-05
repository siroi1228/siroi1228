"use client";

import { useTheme } from '../layout'; // 전역 테마 가져오기
import Link from 'next/link';
import Image from 'next/image';

export default function StudyPage() {
  const { isDark, toggleTheme } = useTheme(); //

  return (
    <main className="min-h-screen p-8 transition-colors duration-500">
      <div className="max-w-4xl mx-auto">
        {/* 상단 네비게이션 및 다크모드 버튼 */}
        <nav className="mb-8 flex justify-between items-center">
          <Link href="/" className="text-blue-500 hover:underline font-medium">
            ← 메인으로 돌아가기
          </Link>
          
          {/* 각 페이지별 다크모드 토글 버튼 */}
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
        <header className={`p-10 rounded-3xl border transition-all duration-500 mb-10 ${
          isDark ? 'bg-slate-800/50 border-slate-700 shadow-xl' : 'bg-white border-slate-200 shadow-sm'
        }`}>
          <div className="flex flex-col md:flex-row items-center gap-6">
            
            <div className="text-center md:text-left">
             <h1 className={`text-4xl font-black mb-2 transition-colors flex items-center justify-center md:justify-start gap-2 ${
                             isDark ? 'text-white' : 'text-slate-800'}`}>📓<span>학습 기록장</span></h1>
              <p className={`text-lg transition-colors ${
                isDark ? 'text-slate-400' : 'text-slate-500'
              }`}>
                그동안 배운 각종 지식과 성장을 기록하는 공간입니다.
              </p>
            </div>
          </div>
        </header>

        {/* 학습 일지 리스트 예시 (isDark 적용) */}
        <div className="space-y-6">
          <div className={`p-8 rounded-2xl border transition-all duration-500 ${
            isDark 
              ? 'bg-slate-800/40 border-slate-700 hover:border-blue-500' 
              : 'bg-white border-slate-200 hover:border-blue-300 shadow-sm'
          }`}>
            
            <div className="flex justify-between items-center mb-4">
              <span className={`px-3 py-1 rounded-full text-sm font-bold ${
                isDark ? 'bg-blue-900/50 text-blue-300' : 'bg-blue-100 text-blue-600'
              }`}>2026.01.03</span>
              </div>
               <h2 className={`text-2xl font-bold mb-3 ${isDark ? 'text-slate-100' : 'text-slate-800'}`}>
              Next.js 전역 테마 시스템 구축
              
            </h2>
            
            <p className={`${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
              Context API를 사용하여 프로젝트 전체의 다크모드 상태를 관리하는 방법을 배웠다. 
              이제 페이지를 이동해도 사용자의 테마 설정이 유지된다.
            </p>
          </div>
<div className="space-y-6">
  <div className={`p-8 rounded-2xl border transition-all duration-500 ${
    isDark 
      ? 'bg-slate-800/40 border-slate-700 hover:border-purple-500' 
      : 'bg-white border-slate-200 hover:border-purple-300 shadow-sm'
  }`}>
    <div className="flex justify-between items-center mb-4">
      <span className={`px-3 py-1 rounded-full text-sm font-bold ${
        isDark ? 'bg-purple-900/50 text-purple-300' : 'bg-purple-100 text-purple-600'
      }`}>2026.02.05</span>
    </div>
    <h2 className={`text-2xl font-bold mb-3 ${isDark ? 'text-slate-100' : 'text-slate-800'}`}>
      git을 통하여 포트폴리오사이트 공유 완료
    </h2>
    <p className={`${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
      LLM AI의 도움을 받아 git을 이용하여 온라인으로 포트폴리오사이트를 유포햇다.
    </p>
  </div>
</div>
        </div>
      </div>
    </main>
  );
}