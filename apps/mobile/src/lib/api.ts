import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:3000/api',
  timeout: 10000,
});

// TODO: Add request interceptor for auth tokens
// TODO: Add response interceptor for error handling

export default apiClient;
