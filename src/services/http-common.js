import axios from 'axios';

export const HTTP = axios.create({
    baseURL: process.env.APP_WEB_SERVICE_URL
})
