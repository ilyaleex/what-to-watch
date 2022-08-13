import {State} from '../../types/state';
import {NameSpace} from '../../const';

export const getFavorites = (state: State) => state[NameSpace.Favorite].favorites;

export const getIsLoadedFavorites = (state: State) => state[NameSpace.Favorite].isDataLoaded;
