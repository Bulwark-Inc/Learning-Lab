import { useEffect, useState } from 'react';

function Header() {
  const [isDark, setIsDark] = useState(() => {
    // Check user’s preference from localStorage or system
    return (
      localStorage.getItem('theme') === 'dark' ||
      (!localStorage.getItem('theme') &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    );
  });

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  const toggleDarkMode = () => setIsDark(!isDark);

  return (
    <header className="absolute top-4 right-4">
      <button
        onClick={toggleDarkMode}
        className="p-2 text-sm bg-gray-200 dark:bg-gray-700 rounded shadow hover:scale-105 transition"
      >
        {isDark ? '☀️ Light' : '🌙 Dark'}
      </button>
    </header>
  );
}

export default Header;
