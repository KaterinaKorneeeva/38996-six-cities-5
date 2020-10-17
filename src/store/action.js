import {offersByCity} from "../offers";
import offers from "../mocks/offers";

export const ActionType = {
  TOGGLE_CITY: `TOGGLE_CITY`,
  GET_OFFERS: `GET_OFFERS`,
  OFFER_CARD_HOVER: `OFFER_CARD_HOVER`
};

export const ActionCreator = {

  toggleCity: (selectedCity) => {
    return {
      type: ActionType.TOGGLE_CITY,
      city: selectedCity,
      offerList: offersByCity(selectedCity, offers)
    };
  },

  getOffers: () => ({
    type: ActionType.GET_OFFERS,
  }),
  offerCardHover: () => ({
    type: ActionType.OFFER_CARD_HOVER,
  })
};
