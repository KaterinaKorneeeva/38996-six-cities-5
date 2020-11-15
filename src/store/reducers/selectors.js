import {NameSpace} from "./root-reducer";
import {createSelector} from "reselect";

export const getOffers = (state, _city) => {
  return state[NameSpace.DATA].offers;
};

export const getOffersByCity = createSelector(
    getOffers,
    (offers, city) => {
      return offers.filter((it) => it.city === city);
    }
);
