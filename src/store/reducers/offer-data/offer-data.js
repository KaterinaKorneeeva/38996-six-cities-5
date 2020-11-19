import {extend} from "../../../utils";
import {ActionType} from "../../action";
import {offersByCity} from "../../../offers";

const initialState = {
  selectedCity: `Paris`,
  offerList: [],
  offer: [],
  offerId: 6,
  offerListByCity: [],
  sortingType: `POPULAR`,
  offerIdActive: 0,
  comments: [],
  offersNearby: [],
};

const offerData = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.TOGGLE_CITY:
      return extend(state, {
        selectedCity: action.payload,
        offerListByCity: offersByCity(state.offerList, action.payload),
      }
      );

    case ActionType.LOAD_OFFERS:
      return extend(state, {
        offerList: action.payload,
        offerListByCity: offersByCity(action.payload, `Paris`),
      });

    case ActionType.UPDATE_SORTING_TYPE:
      return extend(state, {
        sortingType: action.payload,
      });

    case ActionType.SORT_LOW_TO_HIGH:
      return extend(state, {
        offerListByCity: state.offerListByCity.slice(0).sort((firstOffer, secondOffer) => firstOffer.price > secondOffer.price ? 1 : -1),
      });
    case ActionType.SORT_POPULAR:
      return extend(state, {
        offerListByCity: state.offerListByCity,
      });
    case ActionType.SORT_HIGH_TO_LOW:
      return extend(state, {
        offerListByCity: state.offerListByCity.slice(0).sort((firstOffer, secondOffer) => firstOffer.price < secondOffer.price ? 1 : -1),
      });
    case ActionType.SORT_TOP_RATED:
      return extend(state, {
        offerListByCity: state.offerListByCity.slice(0).sort((firstOffer, secondOffer) => firstOffer.rating < secondOffer.rating ? 1 : -1),
      });
    case ActionType.UPDATE_OFFER_ID_ACTIVE:
      return extend(state, {
        offerIdActive: action.payload,
      });

    case ActionType.LOAD_COMMENTS:
      return extend(state, {
        comments: action.payload,
      });

    case ActionType.LOAD_OFFERS_NEARBY:
      return extend(state, {
        offersNearby: action.payload,
      });

  }

  return state;
};

export {offerData};


