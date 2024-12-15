import axios from 'axios';

const axiosInstance = axios.create({
<<<<<<< HEAD
  baseURL: 'http://localhost:3000', 
=======
  baseURL: 'https://think-india-backend.onrender.com', 
>>>>>>> 8650b216410f20af75144cd548ab09d3b87fd3a4
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials:true,
});

export default axiosInstance;
