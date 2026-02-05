"use client";

import { useState, createContext, useContext, useEffect } from 'react'; // useEffect 추가
import "./globals.css";

const ThemeContext = createContext({ isDark: false, toggleTheme: () => {} });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  // 초기 상태를 false로 설정 (Hydration mismatch 방지)
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  // 컴포넌트가 마운트된 후에만 렌더링하도록 설정 (브라우저 환경 확인)
  useEffect(() => {
    setMounted(true);
    // 로컬 스토리지에 저장된 테마가 있다면 불러오기
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setIsDark(true);
    }
  }, []);

  const toggleTheme = () => {
    setIsDark((prev) => {
      const newTheme = !prev;
      localStorage.setItem('theme', newTheme ? 'dark' : 'light'); // 테마 저장
      return newTheme;
    });
  };

  // 서버와 클라이언트의 결과물이 달라 에러가 나는 것을 방지
  if (!mounted) {
    return (
      <html lang="ko">
        <body className="bg-gray-50">{children}</body>
      </html>
    );
  }

  return (
    <html lang="ko">
      <body className={isDark ? 'dark' : ''}>
        <ThemeContext.Provider value={{ isDark, toggleTheme }}>
          <div className={`min-h-screen transition-colors duration-500 ease-in-out ${
            isDark ? 'bg-[#0f172a] text-slate-100' : 'bg-gray-50 text-slate-900'
          }`}>
            {children}
          </div>
        </ThemeContext.Provider>
      </body>
    </html>
  );
}

export const useTheme = () => useContext(ThemeContext);