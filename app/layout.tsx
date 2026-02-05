"use client";

import { useState, createContext, useContext, useEffect } from 'react';
import "./globals.css";

const ThemeContext = createContext({ isDark: false, toggleTheme: () => {} });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // 1. 마운트 시점에 한 번만 테마 로드
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') setIsDark(true);
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setIsDark(prev => {
      const next = !prev;
      localStorage.setItem('theme', next ? 'dark' : 'light');
      return next;
    });
  };

  return (
    <html lang="ko" className={mounted && isDark ? 'dark' : ''}>
      <body className="transition-colors duration-500">
        <ThemeContext.Provider value={{ isDark, toggleTheme }}>
          {/* 하이드레이션 에러를 방지하면서도 구조를 유지하는 방식 */}
          <div 
            style={{ opacity: mounted ? 1 : 0 }} 
            className={`min-h-screen ${
              isDark ? 'bg-[#0f172a] text-slate-100' : 'bg-gray-50 text-slate-900'
            }`}
          >
            {children}
          </div>
        </ThemeContext.Provider>
      </body>
    </html>
  );
}

export const useTheme = () => useContext(ThemeContext);
<html lang="ko" translate="no"></html>