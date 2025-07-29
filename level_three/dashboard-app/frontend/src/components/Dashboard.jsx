import React, { useEffect, useState } from 'react';
import { fetchScrapedData } from '../services/api';

const Dashboard = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchScrapedData()
      .then(res => setData(res.data.results))
      .catch(err => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      {data.map(item => (
        <div key={item.id}>
          <h2>{item.title}</h2>
          <p>{item.summary}</p>
          <small>{item.source} – {item.date_scraped}</small>
        </div>
      ))}
    </div>
  );
};

export default Dashboard;
