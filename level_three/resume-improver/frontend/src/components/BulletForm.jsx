import { useState } from "react";
import axios from "axios";

const BulletForm = ({ onImproved }) => {
  const [bullet, setBullet] = useState("");
  const [role, setRole] = useState("Mid");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const res = await axios.post(`${import.meta.env.VITE_API_BASE}/improve/`, {
      bullet,
      role_level: role,
    });
    setLoading(false);
    onImproved(res.data.improved);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <textarea
        className="w-full p-3 border rounded"
        rows={4}
        placeholder="Paste a resume bullet..."
        value={bullet}
        onChange={(e) => setBullet(e.target.value)}
      />
      <select
        value={role}
        onChange={(e) => setRole(e.target.value)}
        className="border p-2 rounded"
      >
        <option>Junior</option>
        <option>Mid</option>
        <option>Manager</option>
      </select>
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded"
        disabled={loading}
      >
        {loading ? "Improving..." : "Improve Bullet"}
      </button>
    </form>
  );
};

export default BulletForm;
