import { useState, useEffect } from 'react';

function DarkModeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const html = document.documentElement;
    if (isDark) {
      html.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      html.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') setIsDark(true);
  }, []);

  return (
    <button
      onClick={() => setIsDark(!isDark)}
      className="px-4 py-2 rounded bg-gray-200 dark:bg-gray-700"
    >
      {isDark ? '🌞 Light' : '🌙 Dark'}
    </button>
  );
}

export default DarkModeToggle;
