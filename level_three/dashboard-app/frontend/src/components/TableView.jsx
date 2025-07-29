import React, { useEffect, useState } from 'react';
import { fetchScrapedData } from '../services/api';

const TableView = () => {
  const [entries, setEntries] = useState([]);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState('');
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);

  const loadData = async () => {
    setLoading(true);
    try {
      const res = await fetchScrapedData({ page, search });
      setEntries(res.data.results);
      setTotalPages(Math.ceil(res.data.count / 10));
    } catch (err) {
      console.error('Error loading data:', err);
    } finally {
      setLoading(false);
    }
  };

  const exportToCSV = () => {
    const headers = ['Title', 'Source', 'Date'];
    const rows = entries.map(e => [e.title, e.source, e.date_scraped]);

    let csvContent = 'data:text/csv;charset=utf-8,';
    csvContent += headers.join(',') + '\n';
    rows.forEach(row => {
        csvContent += row.join(',') + '\n';
    });

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'scraped_data.csv');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    };


  useEffect(() => {
    loadData();
  }, [page, search]);

  return (
    <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 p-4">
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search by title/summary..."
          className="border px-3 py-2 w-full sm:w-1/2"
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
      </div>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <table className="min-w-full table-auto border-collapse">
          <thead>
            <tr className="bg-gray-200 dark:bg-gray-900 text-left">
              <th className="p-2">Title</th>
              <th className="p-2">Source</th>
              <th className="p-2">Date</th>
            </tr>
          </thead>
          <tbody>
            {entries.map(item => (
              <tr key={item.id} className="border-t">
                <td className="p-2">{item.title}</td>
                <td className="p-2">{item.source}</td>
                <td className="p-2">{item.date_scraped}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      <button
        onClick={exportToCSV}
        className="mt-4 px-3 py-1 bg-green-600 text-white rounded"
        >
        ⬇️ Download CSV
        </button>

      <div className="flex justify-center mt-4 gap-2">
        <button
          className="px-3 py-1 border rounded disabled:opacity-50"
          onClick={() => setPage(p => Math.max(p - 1, 1))}
          disabled={page === 1}
        >
          Prev
        </button>
        <span>Page {page}</span>
        <button
          className="px-3 py-1 border rounded disabled:opacity-50"
          onClick={() => setPage(p => p + 1)}
          disabled={page >= totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default TableView;
