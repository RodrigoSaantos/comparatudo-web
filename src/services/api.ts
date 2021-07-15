import axios from 'axios'

const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL_BASE,
});

const apiHttp = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL_HTTP,
});




export {api, apiHttp};
