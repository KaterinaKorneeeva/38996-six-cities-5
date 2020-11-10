// import offers from "../mocks/offers";
import {offersByCity} from "../offers";

export const ActionType = {
  TOGGLE_CITY: `TOGGLE_CITY`,
  GET_OFFERS: `GET_OFFERS`,
  REQUIRED_AUTHORIZATION: `REQUIRED_AUTHORIZATION`,
  LOAD_OFFERS: 'LOAD_OFFERS'
};


export const toggleCity = (offers, selectedCity) => ({


  type: ActionType.TOGGLE_CITY,
  // city: selectedCity,
  // city: "Dusseldorf",
  selectedCity: selectedCity,
  offerList: offers,
  offerListByCity: offersByCity(offers)
});


export const loadOffers = (offers) => ({
  type: ActionType.LOAD_OFFERS,
  payload: offers,
});

export const requireAuthorization = (status) => ({
  type: ActionType.REQUIRED_AUTHORIZATION,
  payload: status,
});
