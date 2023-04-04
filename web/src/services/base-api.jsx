import axios from 'axios';

const http = axios.create({
  baseURL: process.env.REACT_APP_BASE_API_URL || 'http://localhost:3001/api/v1',
  timeout: 1000 * 2
})

export default http;