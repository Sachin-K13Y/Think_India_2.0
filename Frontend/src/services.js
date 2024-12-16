import axios from 'axios';

const axiosInstance = axios.create({

  baseURL: 'https://think-india-2-0.onrender.com/', 

  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials:true,
});

export default axiosInstance;
