import { useState, useEffect } from "react";
import axios from "axios";
import { motion } from "framer-motion";

const TailorForm = ({ bullet, onTailored }) => {
  const [jd, setJd] = useState("");
  const [tailoredText, setTailoredText] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Reset tailored when bullet or JD changes externally
    setTailoredText("");
  }, [bullet]);

  const handleTailor = async () => {
    if (!bullet || !jd) return;
    setLoading(true);
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_API_BASE}/tailor/`,
        { bullet, job_description: jd }
      );
      setTailoredText(res.data.tailored);
      onTailored(res.data.tailored);
    } catch (err) {
      console.error("Tailoring failed:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mt-6 space-y-4">
      <textarea
        className="w-full p-3 border rounded bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
        rows={3}
        placeholder="Paste job description here..."
        value={jd}
        onChange={(e) => setJd(e.target.value)}
      />
      <button
        onClick={handleTailor}
        disabled={!bullet || !jd || loading}
        className="bg-purple-600 disabled:opacity-50 disabled:cursor-not-allowed text-white px-4 py-2 rounded"
      >
        {loading ? "Tailoring..." : "Tailor to Job Description"}
      </button>

        {tailoredText && (
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="mt-6 p-4 bg-purple-100 dark:bg-purple-800 text-black dark:text-white rounded shadow"
            >
                <p className="font-semibold">🎯 Tailored for Job Description:</p>
                <p className="mt-2">{tailoredText}</p>
            </motion.div>
        )}
    </div>
  );
};

export default TailorForm;
