import { useState } from "react"

export default function Header() {
  const [dark, setDark] = useState(false)

  const toggleDark = () => {
    document.documentElement.classList.toggle("dark")
    setDark(!dark)
  }

  return (
    <header className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
      <h1 className="text-xl font-bold">📝 GPT Rewriter</h1>
      <button onClick={toggleDark} className="text-sm underline">
        {dark ? "Light Mode" : "Dark Mode"}
      </button>
    </header>
  )
}
