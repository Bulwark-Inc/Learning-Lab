const ResumePreview = ({ bullets, onClear }) => {
  if (!bullets.length) return null;

  return (
    <div className="mt-6 border-t pt-4">
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-bold mb-2">📄 Resume Preview</h2>
        <button
          onClick={onClear}
          className="text-sm bg-red-200 px-2 py-1 rounded"
        >
          Clear All
        </button>
      </div>
      <ul className="list-disc ml-6 space-y-1">
        {bullets.map((b, i) => (
          <li key={i}>{b}</li>
        ))}
      </ul>
    </div>
  );
};

export default ResumePreview;
