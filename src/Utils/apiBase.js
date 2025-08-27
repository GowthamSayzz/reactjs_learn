import axios from 'axios';


const apiBaseURL = axios.create({
  baseURL: 'https://api.softwareschool.co',
});

apiBaseURL.interceptors.request.use(
  config => {
    const token = localStorage.getItem('token');
    if(token){
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

export default apiBaseURL;