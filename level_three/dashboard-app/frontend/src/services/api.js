import axios from 'axios';

// 🔧 Base API setup
const API = axios.create({
  baseURL: 'http://localhost:8000/api/',
});

// 🔑 Request interceptor to add JWT token
API.interceptors.request.use(config => {
  const token = localStorage.getItem('access_token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  config.headers['Content-Type'] = 'application/json';
  return config;
});

// 🚪 Logout helper
export const logoutUser = () => {
  localStorage.removeItem('access_token');
  localStorage.removeItem('refresh_token');
  window.location.href = '/login';
};

// 🔄 Token refresh interceptor
API.interceptors.response.use(
  response => response,
  async error => {
    const originalRequest = error.config;

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      const refresh = localStorage.getItem('refresh_token');

      if (!refresh) {
        logoutUser();
        return Promise.reject(error);
      }

      try {
        const res = await axios.post('http://localhost:8000/api/token/refresh/', {
          refresh,
        });
        localStorage.setItem('access_token', res.data.access);
        originalRequest.headers.Authorization = `Bearer ${res.data.access}`;
        return API(originalRequest); // Retry original request
      } catch (err) {
        logoutUser();
      }
    }

    return Promise.reject(error);
  }
);

// 📦 API calls
export const fetchScrapedData = (params) =>
  API.get('scraped-data/', { params });

export const loginUser = (credentials) =>
  API.post('token/', credentials);

export const registerUser = (userData) =>
  API.post('register/', userData);

export default API;
