import axios from 'axios';

const http = axios.create({
  baseURL: `https://jsonplaceholder.typicode.com`,
});

// interceptors

export default http;
