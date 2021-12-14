import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { useMessage } from 'naive-ui';

const service = axios.create({
  baseURL: process.env.dev.VUE_APP_HOST,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
  },
  withCredentials: false,
  timeout: 30000,
});

service.interceptors.request.use((config: AxiosRequestConfig) => {
  const token = '';
  if (token) { // @ts-ignore
    config.headers.Authorization = token;
  }
  return config;
}, (error: any) => {
  error.data = {
    message: '服务器异常，请联系管理人员'
  };
  return Promise.reject(error);
});

service.interceptors.response.use(
  (response: AxiosResponse) => {
    if (response.status >= 200 && response.status < 300) {
      let res = response.data;
      if (typeof res === 'string') {
        res = res ? JSON.parse(res) : res;
      }
      return res;
    }
  },
  (error) => {
    if (axios.isCancel(error)) {
      useMessage().warning('请勿重复请求');
    }
    return Promise.reject(error);
  });
