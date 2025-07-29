import React, { useState } from 'react';
import { registerUser } from '../services/api';

const Register = ({ onRegisterSuccess }) => {
  const [form, setForm] = useState({
    username: '',
    email: '',
    password: '',
  });

  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(null);

    try {
      await registerUser(form);
      setSuccess('Registration successful. You can now log in.');
      setForm({ username: '', email: '', password: '' });
      if (onRegisterSuccess) onRegisterSuccess();
    } catch (err) {
      const resData = err.response?.data;
      const firstError = resData?.username?.[0] ||
                         resData?.email?.[0] ||
                         resData?.password?.[0] ||
                         resData?.detail ||
                         'Registration failed';
      setError(firstError);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-sm mx-auto mt-10 p-6 bg-white shadow">
      <form onSubmit={handleSubmit}>
        <h2 className="text-lg font-semibold mb-4">Register</h2>

        <input
          className="block w-full border p-2 mb-4"
          type="text"
          name="username"
          placeholder="Username"
          value={form.username}
          onChange={handleChange}
          required
        />
        <input
          className="block w-full border p-2 mb-4"
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
        />
        <input
          className="block w-full border p-2 mb-4"
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          required
        />

        <button
          className="bg-green-500 text-white px-4 py-2 rounded disabled:opacity-50"
          type="submit"
          disabled={loading}
        >
          {loading ? 'Registering...' : 'Register'}
        </button>

        {success && <p className="text-green-600 mt-2">{success}</p>}
        {error && !success && <p className="text-red-500 mt-2">{error}</p>}
      </form>
    </div>
  );
};

export default Register;
