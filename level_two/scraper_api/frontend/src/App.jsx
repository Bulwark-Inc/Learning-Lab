import { useState } from "react";
import axios from "axios";
import ResultCard from "./components/ResultCard";

function App() {
  const [url, setUrl] = useState("");
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleScrape = async () => {
    setLoading(true);
    setError("");
    setData(null);

    try {
      const res = await axios.post("http://127.0.0.1:8000/api/scrape/", {
        url: url.trim(),
      });
      setData(res.data);
    } catch (err) {
      setError(err.response?.data?.error || "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white p-6">
      <div className="max-w-2xl mx-auto space-y-6">
        <h1 className="text-3xl font-bold text-center">🔍 Web Scraper</h1>

        <input
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="Enter a valid URL..."
          className="w-full p-3 border rounded"
        />

        <button
          onClick={handleScrape}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          {loading ? "Scraping..." : "Scrape URL"}
        </button>

        {error && <p className="text-red-500">{error}</p>}

        {data && <ResultCard data={data} />}
      </div>
    </div>
  );
}

export default App;
