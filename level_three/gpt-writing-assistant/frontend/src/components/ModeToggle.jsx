import { useEffect, useState } from "react"

export default function DarkModeToggle() {
  const [dark, setDark] = useState(
    localStorage.theme === "dark" ||
      (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)
  )

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark")
      localStorage.setItem("theme", "dark")
    } else {
      document.documentElement.classList.remove("dark")
      localStorage.setItem("theme", "light")
    }
  }, [dark])

  return (
    <button
      onClick={() => setDark(!dark)}
      className="ml-auto px-3 py-1 border rounded dark:border-gray-600 text-sm"
    >
      {dark ? "☀️ Light Mode" : "🌙 Dark Mode"}
    </button>
  )
}
