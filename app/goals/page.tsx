"use client";

import { useTheme } from '../layout';
import Link from 'next/link';

export default function GoalsPage() {
  // 에러 해결 포인트: { toggleTheme }를 반드시 추가해야 버튼이 작동합니다!
  const { isDark, toggleTheme } = useTheme(); 

  return (
    <main className="min-h-screen p-10">
      <div className="max-w-2xl mx-auto">
        {/* 상단 네비게이션: 돌아가기 링크와 다크모드 버튼 배치 */}
        <nav className="flex justify-between items-center mb-12">
          <Link href="/" className="text-blue-500 hover:underline">← 메인으로 돌아가기</Link>
          
          {/* 복사해서 넣으신 버튼 코드입니다. 이제 toggleTheme이 정의되어 잘 작동합니다. */}
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
        </nav>
        
        <h1 className={`text-4xl font-extrabold mt-6 mb-10 transition-colors ${
          isDark ? 'text-white' : 'text-gray-900'
        }`}>
          2026년 새해 목표 📅
        </h1>

        <div className="space-y-6">
          <div className={`p-6 rounded-xl border-l-4 transition-all ${
            isDark 
              ? 'bg-slate-800/80 border-yellow-500 text-slate-100 shadow-lg' 
              : 'bg-yellow-50 border-yellow-400 text-gray-800'
          }`}>
            <h2 className="text-xl font-bold">1. 프로그래밍 마스터</h2>
            <p className={`mt-2 ${isDark ? 'text-slate-300' : 'text-gray-600'}`}>
              Next.js를 마스터해서 나만의 멋진 서비스를 3개 이상 런칭하기!
            </p>
          </div>

          <div className={`p-6 rounded-xl border-l-4 transition-all ${
            isDark 
              ? 'bg-slate-800/80 border-blue-500 text-slate-100 shadow-lg' 
              : 'bg-blue-50 border-blue-400 text-gray-800'
          }`}>
            <h2 className="text-xl font-bold">2. 건강 관리</h2>
            <p className={`mt-2 ${isDark ? 'text-slate-300' : 'text-gray-600'}`}>
              매일 아침 30분 운동하고, 건강한 식단 유지하기.
            </p>

          </div>
          <div className={`p-6 rounded-xl border-l-4 transition-all ${
            isDark 
              ? 'bg-slate-800/80 border-pink-500 text-slate-100 shadow-lg' 
              : 'bg-yellow-50 border-pink-400 text-gray-800'
          }`}>
            <h2 className="text-xl font-bold">3. 유투브채널 운영</h2>
            <p className={`mt-2 ${isDark ? 'text-slate-300' : 'text-gray-600'}`}>
              AI툴 연습을 위한 유튜브채널을 운영하기
            </p>
          </div>
        
          <div className={`p-6 rounded-xl border-l-4 transition-all duration-500 ${
  isDark 
    ? 'bg-slate-800 border-green-500 text-slate-100 shadow-lg' // border-l-4에 어울리는 선 색상 추가
    : 'bg-green-50 border-green-400 text-gray-800'
}`}>
  <h2 className="text-xl font-bold">4. 독서와 기록</h2>
  <p className={`mt-2 ${isDark ? 'text-slate-300' : 'text-gray-600'}`}>
    매일 1시간씩 독서하고 내용을 블로그에 기록하기
  </p>
</div>
        </div>
      </div>
    </main> 
  );
}