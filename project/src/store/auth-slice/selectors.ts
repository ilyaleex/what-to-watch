import {NameSpace} from '../../const';
import {State} from '../../types/state';

export const getAuthorizationStatus = (state: State) => state[NameSpace.Auth].authorizationStatus;

export const getAvatar = (state: State) => state[NameSpace.Auth].avatar;

export const getError = (state: State) => state[NameSpace.Auth].error;

export const getIsLoginSending = (state: State) => state[NameSpace.Auth].isSending;

