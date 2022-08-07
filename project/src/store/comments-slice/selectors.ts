import {State} from '../../types/state';
import {NameSpace} from '../../const';

export const getComments = (state: State) => state[NameSpace.Comments].comments;

export const getIsSendingComment = (state: State) => state[NameSpace.Comments].isSending;
