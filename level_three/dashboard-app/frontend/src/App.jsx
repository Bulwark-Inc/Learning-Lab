import React from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard';
import TableView from './components/TableView';
import ChartView from './components/ChartView';

const isAuthenticated = !!localStorage.getItem('access_token');

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <header className="bg-white shadow p-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">
            <NavLink
              to="/"
              >
              📊 Scraped Data Dashboard
            </NavLink>
          </h1>
          <nav className="space-x-4">
            {!isAuthenticated ? (
              <>
                <NavLink to="/login" className="text-gray-600">Login</NavLink>
                <NavLink to="/register" className="text-gray-600">Register</NavLink>
              </>
            ) : (
              <>
                <NavLink
                  to="/table"
                  className={({ isActive }) =>
                    isActive ? 'font-semibold text-blue-600' : 'text-gray-600'
                  }
                  end
                >
                  Table
                </NavLink>
                <NavLink
                  to="/charts"
                  className={({ isActive }) =>
                    isActive ? 'font-semibold text-blue-600' : 'text-gray-600'
                  }
                >
                  Charts
                </NavLink>
                <button
                  onClick={() => {
                    localStorage.removeItem('access_token');
                    localStorage.removeItem('refresh_token');
                    window.location.href = '/login';
                  }}
                  className="text-red-500 ml-4"
                >
                  Logout
                </button>
              </>
            )}
          </nav>
        </header>

        <main className="p-6">
          <Routes>
            <Route path="/login" element={<Login onLogin={() => window.location.href = '/'} />} />
            <Route path="/register" element={<Register onRegisterSuccess={() => navigate('/login')} />
} />
            <Route
              path="/"
              element={isAuthenticated ? <Dashboard /> : <Navigate to="/login" />}
            />
            <Route
              path="/table"
              element={isAuthenticated ? <TableView /> : <Navigate to="/login" />}
            />
            <Route
              path="/charts"
              element={isAuthenticated ? <ChartView /> : <Navigate to="/login" />}
            />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
