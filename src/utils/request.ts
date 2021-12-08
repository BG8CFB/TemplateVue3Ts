import axios,{AxiosRequestConfig,AxiosResponse} from 'axios';

const service = axios.create({
  baseURL: process.env.VUE_APP_HOST,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
  },
  withCredentials: false,
  timeout: 30000,

});

service.interceptors.request.use((config:AxiosRequestConfig) => {
  const token = '';
  if (token) {
    // @ts-ignore
    config.headers.Authorization = token;
  }
  return config;
},(error:any) => {
  console.log(error);
  return Promise.reject(error);
});
