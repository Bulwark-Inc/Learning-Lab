import { useEffect, useState } from "react"

export default function OutputBox({ result }) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (result) {
      setVisible(false)
      const timer = setTimeout(() => setVisible(true), 10) // brief delay to trigger animation
      return () => clearTimeout(timer)
    }
  }, [result])

  if (!result) return null

  return (
    <div
      className={`mt-6 p-4 border rounded bg-white dark:bg-gray-800 dark:border-gray-600 transition-opacity duration-700 ease-in-out ${
        visible ? "opacity-100" : "opacity-0"
      }`}
    >
      <h2 className="font-bold mb-2">🧠 Rewritten Output:</h2>
      <p>{result}</p>
    </div>
  )
}
