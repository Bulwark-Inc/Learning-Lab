import { useState, useEffect } from 'react';
import QuoteCard from './components/QuoteCard';
import Header from './components/Header';

function App() {
  const [quote, setQuote] = useState(null);
  const [loading, setLoading] = useState(true);
  const [fade, setFade] = useState(false);

  const fetchQuote = async () => {
    setLoading(true);
    setFade(false); // reset animation
    const res = await fetch('https://api.quotable.io/random');
    const data = await res.json();
    setQuote(data);
    setLoading(false);
    setTimeout(() => setFade(true), 50); // trigger fade-in
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white px-4 transition-colors">
      <Header />
      {loading ? (
        <p className="text-lg animate-pulse">Loading quote...</p>
      ) : (
        <div className={`transition-opacity duration-500 ${fade ? 'opacity-100' : 'opacity-0'}`}>
          <QuoteCard quote={quote} />
        </div>
      )}
      <button
        onClick={fetchQuote}
        className="mt-6 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        disabled={loading}
      >
        {loading ? 'Fetching...' : 'New Quote'}
      </button>
    </div>
  );
}

export default App;
