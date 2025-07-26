import { useState } from "react";
import axios from "axios";

export default function ChatBox() {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!prompt.trim()) return;
    setLoading(true);
    setResponse("");

    try {
      const res = await axios.post("http://localhost:8000/api/chat/", {
        prompt,
      }, {
        headers: {
          Authorization: "Token your_token_here"
        }
      });
      setResponse(res.data.response);
    } catch (err) {
      setResponse("⚠️ Error: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-4 bg-white dark:bg-gray-800 rounded shadow">
      <textarea
        className="w-full p-2 border rounded dark:bg-gray-700 dark:text-white"
        rows="4"
        placeholder="Ask me anything..."
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      />
      <button
        className="mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        onClick={sendMessage}
        disabled={loading}
      >
        {loading ? "Thinking..." : "Send"}
      </button>

      {response && (
        <div className="mt-4 p-3 bg-gray-100 dark:bg-gray-700 dark:text-white rounded">
          <strong>GPT:</strong> {response}
        </div>
      )}
    </div>
  );
}
