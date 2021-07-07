import axios from 'axios';

const token = localStorage.getItem('token');

export const api = axios.create({
    baseURL: 'http://localhost:8080/api',
    headers: {'Authorization': `bearer ${token}`}
})
