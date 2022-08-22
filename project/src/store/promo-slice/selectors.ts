import {State} from '../../types/state';
import {NameSpace} from '../../const';

export const getPromo = (state: State) => state[NameSpace.Promo].promo;

export const getLoadedPromoDataStatus = (state: State) => state[NameSpace.Promo].isDataLoaded;

export const getErrorLoadPromo = (state: State) => state[NameSpace.Promo].isError;

