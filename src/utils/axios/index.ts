import axios, {AxiosRequestConfig, AxiosResponse} from 'axios';
import {useMessage} from 'naive-ui';

const service = axios.create({
  baseURL: process.env.dev.VUE_APP_HOST,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
    "Access-Control-Allow-Origin-Type": '*'
  },
  withCredentials: false,
  timeout: 30000,
});

service.interceptors.request.use(
  (config: AxiosRequestConfig) => {
  const token = '';
  if (token) { // @ts-ignore
    config.headers.Authorization = token;
  }
  return config;
},
  (error: any) => {
  // 错误抛到业务代码
  error.data = {
    message: '服务器异常，请联系管理员！'
  };
  return Promise.reject(error);
});

const showStatus = (status: number) => {
  let message = '';
  switch (status) {
    case 400:
      message = '请求错误(400)';
      break;
    case 401:
      message = '未授权，请重新登录(401)';
      break;
    case 403:
      message = '拒绝访问(403)';
      break;
    case 404:
      message = '请求出错(404)';
      break;
    case 408:
      message = '请求超时(408)';
      break;
    case 500:
      message = '服务器错误(500)';
      break;
    case 501:
      message = '服务未实现(501)';
      break;
    case 502:
      message = '网络错误(502)';
      break;
    case 503:
      message = '服务不可用(503)';
      break;
    case 504:
      message = '网络超时(504)';
      break;
    case 505:
      message = 'HTTP版本不受支持(505)';
      break;
    default:
      message = `连接出错(${status})!`;
  }
  return message;
};

service.interceptors.response.use(
  (response: AxiosResponse) => {
    if (response.status >= 200 && response.status < 300) {
      let res = response.data;
      if (typeof res === 'string') {
        res = res ? JSON.parse(res) : res;
      }
      return Promise.resolve(res);
    } else {
      const message = showStatus(Number(response.status));
      useMessage().error(message);
      return Promise.reject(response);
    }
  },
  (error) => {
    useMessage().error('请求超时或服务器异常，请检查网络或联系管理员！');
    return Promise.reject(error);
  }
);

export default service;
