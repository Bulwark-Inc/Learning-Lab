import { useState } from "react";
import BulletForm from "./components/BulletForm";
import ScoreDisplay from "./components/ScoreDisplay";
import TailorForm from "./components/TailorForm";
import ResumePreview from "./components/ResumePreview";
import ThemeToggle from "./components/ThemeToggle";
import { motion } from "framer-motion";

function App() {
  const [improved, setImproved] = useState("");
  const [resumeBullets, setResumeBullets] = useState([]);
  const [tailored, setTailored] = useState("");

  const handleImproved = (text) => {
    setImproved(text);
    setResumeBullets((prev) => [...prev, text]);
    setTailored("");
  };

  const handleTailored = (text) => {
    setTailored(text);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white px-6 py-10 relative">
      <ThemeToggle />

      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-bold text-center mb-6">
          ✍️ Resume Bullet Improver
        </h1>

        <BulletForm onImproved={handleImproved} />

        {improved && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="mt-6 p-4 bg-green-100 dark:bg-green-800 text-black dark:text-white rounded shadow"
          >
            <p className="font-semibold">✅ Improved Bullet:</p>
            <p className="mt-2">{improved}</p>
          </motion.div>
        )}

        <ScoreDisplay bullet={improved} />

        <TailorForm bullet={improved} onTailored={handleTailored} />

        <ResumePreview
          bullets={resumeBullets}
          onClear={() => setResumeBullets([])}
        />
      </div>
    </div>
  );
}

export default App;
