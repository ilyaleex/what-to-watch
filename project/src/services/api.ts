import axios, {AxiosError, AxiosInstance, AxiosRequestConfig} from 'axios';
import {getToken} from './token';
import {redirectToRoute} from '../store/action';
import {AppRoute, BASE_URL, REQUEST_TIMEOUT} from '../const';
import {Store} from '@reduxjs/toolkit';
import {toast} from 'react-toastify';
import {ErrorMessage} from '../utils/validation';

let store: Store;

export const injectStore = (_store: Store) => {
  store = _store;
};

enum ErrorCode {
  NotFound = 404,
  ServerError = 500,
}

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
      if (error.response && error.response.status === ErrorCode.NotFound) {
        store.dispatch(redirectToRoute(AppRoute.NotFound));
      }
      if (error.response && error.response.status >= ErrorCode.ServerError) {
        toast.error(ErrorMessage.ServerError);
      }
      throw error;
    });


  return api;
};
