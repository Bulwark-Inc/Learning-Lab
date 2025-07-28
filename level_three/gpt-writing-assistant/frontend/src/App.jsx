import { useState } from 'react'
import axios from 'axios'
import Header from './components/Header'
import ResponseBox from './components/ResponseBox'

axios.defaults.baseURL = import.meta.env.VITE_API_BASE || 'http://localhost:8000';

function App() {
  const [text, setText] = useState("")
  const [response, setResponse] = useState("")
  const [mode, setMode] = useState("rewrite")
  const [loading, setLoading] = useState(false)

  const handleSubmit = async () => {
    setLoading(true)
    const endpoint = mode === 'rewrite' ? '/api/rewrite/' : '/api/summarize/'

    try {
      const res = await axios.post(endpoint, { text, mode })
      setResponse(res.data.result)
    } catch (err) {
      setResponse("⚠️ Error: " + err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-white transition-colors duration-300">
      <div className="max-w-3xl mx-auto p-6">
        <Header />

        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Paste your text here..."
          className="w-full h-48 p-4 border border-gray-300 dark:border-gray-700 rounded bg-white dark:bg-gray-800 resize-none shadow-sm mb-4"
        />

        <div className="flex flex-col sm:flex-row gap-3 mb-4">
          <select
            value={mode}
            onChange={(e) => setMode(e.target.value)}
            className="p-2 border rounded w-full sm:w-1/3 dark:border-gray-600 bg-white dark:bg-gray-800"
          >
            <option value="rewrite">Rewrite</option>
            <option value="summarize">Summarize</option>
          </select>

          <button
            onClick={handleSubmit}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded w-full sm:w-auto disabled:opacity-60 transition"
            disabled={loading || !text}
          >
            {loading ? "Processing..." : "Submit"}
          </button>
        </div>

        <ResponseBox response={response} />
      </div>
    </div>
  )
}

export default App
