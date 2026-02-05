"use client";

import { useTheme } from '../layout';
import Link from 'next/link';
import Image from 'next/image';

export default function YoutubePage() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <main className="min-h-screen p-8 transition-colors duration-500">
      <div className="max-w-4xl mx-auto">
        {/* 네비게이션 및 다크모드 버튼 */}
        <nav className="flex justify-between items-center mb-12">
          <Link href="/" className={`font-medium ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>
            ← 메인으로 돌아가기
          </Link>
          <button 
            onClick={toggleTheme}
            className={`relative w-16 h-8 rounded-full transition-colors duration-500 ${isDark ? 'bg-indigo-600' : 'bg-amber-400'}`}
          >
            <div className={`absolute top-1 left-1 w-6 h-6 bg-white rounded-full transition-transform duration-500 ${isDark ? 'translate-x-8' : ''}`} />
          </button>
        </nav>

        {/* 헤더 섹션 */}
        <header className={`p-10 rounded-[2.5rem] border transition-all duration-500 mb-12 flex flex-col md:flex-row items-center gap-8 ${
          isDark ? 'bg-slate-800/50 border-slate-700 shadow-xl' : 'bg-white border-slate-100 shadow-sm'
        }`}>
          {/* 채널 아이콘 이미지 (이미지가 없으면 붉은색 원으로 대체) */}
          <div className="w-32 h-32 rounded-full bg-red-600 flex items-center justify-center text-5xl text-white shadow-lg shrink-0">
            📽️
          </div>
          <div className="text-center md:text-left">
            <h1 className={`text-4xl font-black mb-3 ${isDark ? 'text-white' : 'text-slate-900'}`}>
              나의 유튜브 채널 🍿
            </h1>
            <p className={`text-lg mb-6 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
              공부한 내용을 복습하고 개발 과정을 기록하며 <br/>
              많은 사람들과 지식을 공유하는 채널입니다.
            </p>
            <a 
              href="https://www.youtube.com/@Hayan_1295" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-red-600 text-white px-8 py-3 rounded-full font-bold hover:bg-red-700 transition-all active:scale-95"
            >
              채널 구독하기
            </a>
          </div>
        </header>

        {/* 채널 특징 소개 박스 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className={`p-8 rounded-3xl border ${isDark ? 'bg-slate-800/40 border-slate-700 text-slate-300' : 'bg-red-50 border-red-100 text-slate-700'}`}>
            <h2 className="text-xl font-bold mb-4 flex items-center gap-2">👨‍💻일상,스터디 브이로그</h2>
            <p>일상이나 배우고 만든것들을 올리는 채널입니다.</p>
          </div>
        </div>
        
        {/* youtube/page.tsx 내부 하단에 추가 */}
<section className="mt-16">
  <h2 className={`text-2xl font-bold mb-8 ${isDark ? 'text-white' : 'text-slate-900'}`}>운영 중인 채널 목록</h2>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
    {/* 채널 1 */}
    <div className={`p-6 rounded-3xl border ${isDark ? 'bg-slate-800/40 border-slate-700' : 'bg-white border-slate-200 shadow-sm'}`}>
      <h3 className="text-xl font-bold mb-2">🎬 메인 채널: 일상,브이로그</h3>
      <p className="text-sm opacity-70 mb-4">개발 지식 공유 및 튜토리얼</p>
      <Link href="https://www.youtube.com/@Hayan_1295" className="text-red-500 font-bold hover:underline">이동하기 →</Link>
    </div>
    
    {/* 채널 2 */}
    <div className={`p-6 rounded-3xl border ${isDark ? 'bg-slate-800/40 border-slate-700' : 'bg-white border-slate-200 shadow-sm'}`}>
      <h3 className="text-xl font-bold mb-2">📸 서브 채널: 만약에 이야기 채널</h3>
      <p className="text-sm opacity-70 mb-4">만약 이슈가 되고있거나 사람들의 관심사들이 실제로 시행된다면?이라는 주제를 담은 AI영상채널입니다.</p>
      <Link href="https://www.youtube.com/channel/UC84KRLr73JseYMuciixti0g" className="text-blue-500 font-bold hover:underline">이동하기 →</Link>
    </div>
  </div>
</section>
      </div>
    </main>
  );
}

