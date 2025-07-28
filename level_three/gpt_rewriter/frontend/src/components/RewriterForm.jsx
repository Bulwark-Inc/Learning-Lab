import { useState } from "react"
import axios from "axios"

export default function RewriterForm({ setResult }) {
  const [text, setText] = useState("")
  const [mode, setMode] = useState("professional")
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setResult("")

    try {
      const res = await axios.post("http://localhost:8000/api/rewrite/", {
        text,
        mode,
      })
      setResult(res.data.rewritten)
    } catch (err) {
      setResult("❌ Error: " + err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <textarea
        className="w-full p-2 border rounded dark:bg-gray-800 dark:border-gray-600"
        rows={6}
        placeholder="Paste your text here..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        required
      />
      <select
        className="w-full p-2 border rounded dark:bg-gray-800 dark:border-gray-600"
        value={mode}
        onChange={(e) => setMode(e.target.value)}
      >
        <option value="professional">Professional</option>
        <option value="friendly">Friendly</option>
        <option value="casual">Casual</option>
        <option value="funny">Funny</option>
      </select>
      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 rounded disabled:opacity-50"
        disabled={loading}
      >
        {loading ? "Rewriting..." : "Rewrite Text"}
      </button>
    </form>
  )
}
