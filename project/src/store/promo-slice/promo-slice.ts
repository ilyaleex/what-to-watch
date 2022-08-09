import {PromoSlice} from '../../types/state';
import {Film} from '../../types/film';
import {createSlice} from '@reduxjs/toolkit';
import {NameSpace} from '../../const';
import {fetchPromoAction} from '../../services/api-action';

const initialState: PromoSlice = {
  promo: {} as Film,
  isDataLoaded: false,
};

export const promoSlice = createSlice({
  name: NameSpace.Promo,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchPromoAction.pending, (state) => {
        state.isDataLoaded = true;
      })
      .addCase(fetchPromoAction.fulfilled, (state, action) => {
        state.promo = action.payload;
        state.isDataLoaded = false;
      });
  }

});
