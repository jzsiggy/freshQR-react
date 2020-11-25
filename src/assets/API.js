import axios from 'axios';

const API = axios.create({
    baseURL: 'https://api.freshqr.io/api',
    // baseURL: 'http://localhost:5000/api',
    withCredentials: true
});

export default API;