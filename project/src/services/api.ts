import axios, {AxiosError, AxiosInstance, AxiosRequestConfig} from 'axios';
import {getToken} from './token';
import {store} from '../store';
import {redirectToRoute} from '../store/action';
import {AppRoute} from '../const';

const BASE_URL = 'https://10.react.pages.academy/wtw';

const REQUEST_TIMEOUT = 5000;

const NOT_FOUND = 404;

export const createAPI = (): AxiosInstance => {
  const api = axios.create({
    baseURL: BASE_URL,
    timeout: REQUEST_TIMEOUT,
  });

  api.interceptors.request.use(
    (config: AxiosRequestConfig) => {
      const token = getToken();

      if (token) {
        config.headers['x-token'] = token;
      }

      return config;
    }
  );


  api.interceptors.response.use(
    (response) => response,
    (error: AxiosError) => {
      if (error.response && error.response.status === NOT_FOUND) {
        store.dispatch(redirectToRoute(AppRoute.NotFound));
      }
      throw error;
    });


  return api;
};
