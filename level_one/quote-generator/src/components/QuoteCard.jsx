function QuoteCard({ quote }) {
  return (
    <div className="bg-white dark:bg-gray-800 shadow-md rounded-md p-6 max-w-xl w-full transition">
      <p className="text-xl italic mb-4">“{quote.content}”</p>
      <p className="text-right font-semibold text-sm text-gray-600 dark:text-gray-400">
        — {quote.author}
      </p>
    </div>
  );
}

export default QuoteCard;
