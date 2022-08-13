import {AuthSlice} from '../../types/state';
import {AuthorizationStatus, NameSpace} from '../../const';
import {AnyAction, createSlice} from '@reduxjs/toolkit';
import {checkAuthAction, loginAction, logoutAction} from '../../services/api-action';

const initialState: AuthSlice = {
  authorizationStatus: AuthorizationStatus.Unknown,
  isSending: false,
  avatar: '',
  error: '',
};

export const authSlice = createSlice({
  name: NameSpace.Auth,
  initialState,
  reducers: {
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(checkAuthAction.fulfilled, (state, action: AnyAction) => {
        state.authorizationStatus = AuthorizationStatus.Auth;
        state.avatar = action.payload;
        state.error = '';
      })
      .addCase(checkAuthAction.rejected, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
        state.avatar = '';
      })
      .addCase(loginAction.pending, (state, action: AnyAction) => {
        state.isSending = true;
      })
      .addCase(loginAction.fulfilled, (state, action: AnyAction) => {
        state.authorizationStatus = AuthorizationStatus.Auth;
        state.avatar = action.payload;
        state.isSending = false;
        state.error = '';
      })
      .addCase(loginAction.rejected, (state, action: AnyAction) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
        state.avatar = '';
        state.isSending = false;
        state.error = action.payload;
      })
      .addCase(logoutAction.fulfilled, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
        state.avatar = '';
        state.error = '';
      });
  }
});

export const {setError} = authSlice.actions;
