import {extend} from "../utils";
import {ActionType} from "./action.js";
import offers from "../mocks/offers";
import {offersByCity} from "../offers";

const initialState = {
  city: `Paris`,
  offerList: offersByCity(`Paris`, offers),
  offerId: 1
};


const reducer = (state = initialState, action) => {

  switch (action.type) {
    case ActionType.TOGGLE_CITY:
      return extend(state, {
        city: action.city,
        offerList: action.offerList,
      });

    case ActionType.GET_OFFERS:
      return extend(state, {
        offerList: state.offerList,
      });

    case ActionType.OFFER_CARD_HOVER:
      return extend(state, {
        offerId: state.offerId,
      });
  }

  return state;
};


export {reducer};
