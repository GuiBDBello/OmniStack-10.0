import axios from 'axios';

const api = axios.create({
    baseURL: 'https://omnistack-10-dev-radar-backend.herokuapp.com/'
});

export default api;