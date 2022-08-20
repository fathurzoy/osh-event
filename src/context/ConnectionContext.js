import axios from 'axios';
// import { API_HOST } from "../constant/CONSTANT";

const api = axios.create({
  baseURL: 'https:/oshevent.herokuapp.com/api',
  headers: {
    'content-type': 'application/json',
  },
});

export default api;
