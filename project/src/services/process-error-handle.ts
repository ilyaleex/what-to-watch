import {setError} from '../store/action';
import {store} from '../store';
import {clearErrorAction} from './api-action';

export const processErrorHandle = (message: string): void => {
  store.dispatch(setError(message));
  store.dispatch(clearErrorAction());
};
