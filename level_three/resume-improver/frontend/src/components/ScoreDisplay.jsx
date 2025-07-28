import { useEffect, useState } from "react";
import axios from "axios";

const ScoreDisplay = ({ bullet }) => {
  const [score, setScore] = useState(null);
  const [tips, setTips] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!bullet) {
      setScore(null);
      setTips([]);
      return;
    }

    const fetchScore = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await axios.post(
          `${import.meta.env.VITE_API_BASE}/score/`,
          { bullet }
        );
        setScore(res.data.score);
        setTips(res.data.tips);
      } catch (err) {
        console.error("Score API failed", err);
        setError("Failed to score bullet. Try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchScore();
  }, [bullet]);

  if (!bullet) return null;

  return (
    <div className="mt-4 p-4 bg-yellow-100 dark:bg-yellow-800 text-gray-900 dark:text-gray-100 rounded shadow">
      {loading ? (
        <p>🔄 Scoring bullet...</p>
      ) : error ? (
        <p className="text-red-600 dark:text-red-300">{error}</p>
      ) : score !== null ? (
        <>
          <p className="font-bold">🧪 Score: {score}/10</p>
          {tips.length > 0 && (
            <ul className="list-disc ml-6 mt-2 text-sm">
              {tips.map((tip, i) => (
                <li key={i}>{tip}</li>
              ))}
            </ul>
          )}
        </>
      ) : null}
    </div>
  );
};

export default ScoreDisplay;
