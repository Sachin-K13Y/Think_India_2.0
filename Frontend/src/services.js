import axios from 'axios';

const axiosInstance = axios.create({

  baseURL: 'https://think-india-backend.onrender.com', 

  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials:true,
});

export default axiosInstance;
