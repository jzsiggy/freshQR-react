import axios from 'axios';

const API = axios.create({
    baseURL: 'http://142.93.127.120:5000/api',
    // baseURL: 'http://localhost:5000/api',
    withCredentials: true
});

export default API;