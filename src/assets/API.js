import axios from 'axios';

const API = axios.create({
    baseURL: process.env.REACT_APP_API_URL || 'https://api.freshqr.io/api',
    withCredentials: true
});

export default API;