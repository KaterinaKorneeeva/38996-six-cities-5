import {extend} from "../utils";
import {ActionType} from "./action.js";
import offers from "../mocks/offers";
import {offersByCity} from "../offers";

const initialState = {
  city: `Paris`,
  offerList: offersByCity(`Paris`, offers),
  offerId: 1,
  sortingType: `POPULAR`,
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
        offerList: action.offerList,
      });

    case ActionType.UPDATE_SORTING_TYPE:
      return extend(state, {
        sortingType: action.sortingType,
      });

    case ActionType.SORT_LOW_TO_HIGH:
      return extend(state, {
        offerList: state.offerList.slice(0).sort((firstOffer, secondOffer) => firstOffer.price > secondOffer.price ? 1 : -1),
      });
    case ActionType.SORT_POPULAR:
      return extend(state, {
        offerList: state.offerList,
      }
      );
    case ActionType.SORT_HIGH_TO_LOW:
      return extend(state, {
        offerList: state.offerList.slice(0).sort((firstOffer, secondOffer) => firstOffer.price < secondOffer.price ? 1 : -1),
      });
    case ActionType.SORT_TOP_RATED:
      return extend(state, {
        offerList: state.offerList.slice(0).sort((firstOffer, secondOffer) => firstOffer.rating < secondOffer.rating ? 1 : -1),
      });
  }

  return state;
};


export {reducer};
