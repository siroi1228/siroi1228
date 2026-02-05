"use client";

import { useTheme } from '../layout';
import Link from 'next/link';

export default function CareerPage() {
  const { isDark, toggleTheme } = useTheme();

  const careers = [
    {
      title: "전문 서비스직",
      company: "광릉컨트리클럽",
      date: "2018.08 ~ 2024.06",
      desc: ["친화력과 대응력및 판단력을 이용하여 많은 사람들의 요청에 알맞는 대응방식과 해결능력 터득"],
      color: "border-blue-500"
    },                                                      
    
    {
      title: "직원관리및 사업계획",
      company: "스타트업 네소",
      date: "2024.06 ~ 2025.01",
      desc: ["스타트기업의 체계구축과 매니저고용후 직원교육체계및 기획을 함으로써 선택과 책임감에 대해 터득"],
      color: "border-red-500"
    },

  ];

  return (
    <main className="min-h-screen p-8 transition-colors duration-500">
      <div className="max-w-3xl mx-auto">
        {/* 네비게이션 */}
        <nav className="flex justify-between items-center mb-12">
          <Link href="/" className={`font-medium ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>
            ← 메인으로 돌아가기
          </Link>
          <button onClick={toggleTheme} className={`relative w-14 h-7 rounded-full ${isDark ? 'bg-indigo-600' : 'bg-amber-400'}`}>
            <div className={`absolute top-1 left-1 w-5 h-5 bg-white rounded-full transition-all ${isDark ? 'translate-x-7' : ''}`} />
          </button>
        </nav>

        <header className="mb-16">
          <h1 className={`text-4xl font-black mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>
            Career History 🏆
          </h1>
          <p className={isDark ? 'text-slate-400' : 'text-slate-600'}>
            성장과 도전의 기록입니다.
          </p>
        </header>

        {/* 타임라인 리스트 */}
        <div className="space-y-8">
          {careers.map((item, idx) => (
            <div key={idx} className={`p-8 rounded-3xl border-l-8 transition-all ${
              isDark ? 'bg-slate-800/40 border-slate-700 hover:border-pink-500' : 'bg-white border-slate-100 shadow-xl'
            } ${item.color}`}>
              <div className="flex justify-between flex-wrap gap-2 mb-4">
                <h3 className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-slate-800'}`}>{item.title}</h3>
                <span className={`px-3 py-1 rounded-full text-xs h-fit ${isDark ? 'bg-slate-700 text-slate-300' : 'bg-gray-100 text-gray-500'}`}>{item.date}</span>
              </div>
              <p className="text-pink-500 font-bold mb-4">{item.company}</p>
              <ul className={`list-disc list-inside space-y-2 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                {item.desc.map((d, i) => <li key={i}>{d}</li>)}
              </ul>
            </div>
          ))}
          {/* 카드 6: 유튜브 채널 (메인 페이지 추가용) */}
<div className={`group p-8 rounded-[2rem] border transition-all duration-500 flex flex-col h-full ${
  isDark 
    ? 'bg-slate-800/50 border-slate-700 hover:border-red-500 hover:shadow-[0_0_30px_-10px_rgba(239,68,68,0.5)]' 
    : 'bg-white border-gray-100 shadow-lg hover:shadow-2xl hover:border-red-200'
}`}>
  <div className="mb-6">
    <span className="text-5xl mb-6 block group-hover:scale-105 transition-transform">📺</span>
    <h3 className={`text-2xl font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-800'}`}>나의 유튜브</h3>
    <p className={isDark ? 'text-slate-400' : 'text-gray-500'}>
      영상으로 기록하는 <br/>개발 및 일상 이야기입니다.
    </p>
  </div>
  <Link href="/youtube" className="mt-auto">
    <button className="w-full bg-red-600 text-white py-4 rounded-2xl font-black hover:bg-red-700 transition-all shadow-lg shadow-red-600/20 active:scale-95">
      영상 보러가기 →
    </button>
  </Link>
</div>
        </div>
      </div>
    </main>
  );
}