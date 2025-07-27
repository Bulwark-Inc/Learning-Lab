function ResultCard({ data }) {
  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded shadow">
      <h2 className="text-xl font-semibold">Page Title:</h2>
      <p className="mb-2">{data.title}</p>

      <h3 className="font-semibold">Links:</h3>
      <ul className="list-disc pl-6">
        {data.links.map((link, idx) => (
          <li key={idx}>
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline"
            >
              {link}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ResultCard;
