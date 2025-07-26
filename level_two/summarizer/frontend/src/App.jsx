import { useState } from "react";
import axios from "axios";

function App() {
  const [text, setText] = useState("");
  const [summary, setSummary] = useState("");
  const [mode, setMode] = useState("paragraph");
  const [loading, setLoading] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const handleSummarize = async () => {
    setLoading(true);
    setSummary("");

    try {
      const res = await axios.post("http://127.0.0.1:8000/api/summarize/", { 
        text, 
        mode, 
      });
      setSummary(res.data.summary);
    } catch (err) {
      setSummary("Error summarizing text.");
      console.error(err);
    }

    setLoading(false);
  };

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="flex justify-end bg-gray-100 dark:bg-gray-900">
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="mb-4 px-3 py-1 text-sm bg-gray-300 dark:bg-gray-700 rounded"
        >
          {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
        </button>
      </div>

      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white p-6">
        <div className="max-w-2xl mx-auto space-y-4">
          <h1 className="text-2xl font-bold">📝 GPT Summarizer</h1>

          <textarea
            className="w-full h-40 p-3 border rounded"
            placeholder="Paste long text here..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          />

          <div className="flex items-center gap-4">
            <label className="font-medium">Format:</label>
            <select
              value={mode}
              onChange={(e) => setMode(e.target.value)}
              className="border p-2 rounded"
            >
              <option value="paragraph">Paragraph</option>
              <option value="bullet">Bullet Points</option>
            </select>
          </div>

          <button
            onClick={handleSummarize}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            disabled={loading}
          >
            {loading ? "Summarizing..." : "Summarize"}
          </button>

          {summary && (
            <div className="mt-4 p-4 border rounded bg-white dark:bg-gray-800 transition-all duration-300 ease-in-out animate-fadeIn">
              <h2 className="font-semibold">Summary:</h2>
              <p className="mt-2 whitespace-pre-line">{summary}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
