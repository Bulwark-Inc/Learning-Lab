import React, { useEffect, useState } from 'react';
import { fetchScrapedData } from '../services/api';
import { Bar, Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, PointElement, LineElement, Title, Tooltip, Legend);

const ChartView = () => {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    fetchScrapedData({ page: 1 }).then(res => {
      setEntries(res.data.results);
    });
  }, []);

  const countBySource = {};
  const countByDate = {};

  entries.forEach(entry => {
    countBySource[entry.source] = (countBySource[entry.source] || 0) + 1;
    countByDate[entry.date_scraped] = (countByDate[entry.date_scraped] || 0) + 1;
  });

  const barData = {
    labels: Object.keys(countBySource),
    datasets: [
      {
        label: 'Entries per Source',
        data: Object.values(countBySource),
        backgroundColor: 'rgba(59, 130, 246, 0.6)',
      },
    ],
  };

  const lineData = {
    labels: Object.keys(countByDate).sort(),
    datasets: [
      {
        label: 'Entries over Time',
        data: Object.keys(countByDate).sort().map(date => countByDate[date]),
        borderColor: 'rgba(16, 185, 129, 0.8)',
        fill: false,
      },
    ],
  };

  return (
    <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 p-4 space-y-8">
      <div>
        <h2 className="text-xl font-semibold mb-2">Entries per Source</h2>
        <Bar data={barData} />
      </div>
      <div>
        <h2 className="text-xl font-semibold mb-2">Entries over Time</h2>
        <Line data={lineData} />
      </div>
    </div>
  );
};

export default ChartView;
