"use client";

import { useEffect, useState } from 'react';
import { useTheme } from '../app/layout';

export default function Weather() {
  const { isDark } = useTheme();
  const [weather, setWeather] = useState<any>(null);
  const API_KEY = "ab8a87ab565deecbb2e027955b45a888";
  const CITY = "Chuncheon";

  useEffect(() => {
    // appid 부분에 변수명 API_KEY를 정확히 넣어주세요
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${CITY}&appid=${API_KEY}&units=metric&lang=kr`)
      .then(res => res.json())
      .then(data => {
        console.log("날씨 데이터 확인:", data); // 데이터가 잘 오는지 터미널에서 확인용
        setWeather(data);
      })
      .catch(err => console.error("날씨 로딩 실패:", err));
  }, []);

  if (!weather) return <div className="animate-pulse">날씨 불러오는 중...</div>;

  return (
    <div className={`p-4 rounded-2xl border transition-all ${
      isDark ? 'bg-slate-800/40 border-slate-700' : 'bg-white border-slate-100 shadow-sm'
    }`}>
      <div className="flex items-center gap-4">
        <span className="text-3xl">
          {weather?.weather?.[0]?.main === 'Clear' ? '☀️' : '☁️'}
        </span>
        <div>
          {/* 비어있던 텍스트 라벨 추가 */}
          <p className={`text-xs font-bold ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
            오늘의 춘천 날씨
          </p>
          <p className={`text-lg font-black ${isDark ? 'text-white' : 'text-slate-900'}`}>
            {weather?.main ? Math.round(weather.main.temp) : '0'}°C / {weather?.weather?.[0]?.description || '확인 중'}
          </p>
        </div>
      </div>
    </div>
  );
}