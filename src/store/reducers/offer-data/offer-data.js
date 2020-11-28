import {extend} from "../../../utils";
import {ActionType} from "../../action";
import {offersByCity, adaptData, replaceItem} from "../../../offers";


const initialState = {
  selectedCity: `Paris`,
  offerList: [],
  offer: [],
  offerListByCity: [],
  sortingType: `POPULAR`,
  offerIdActive: 0,
  comments: [],
  offersNearby: [],
  favoritesOffers: []
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
        offerListByCity: offersByCity(action.payload, state.selectedCity),
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
        comments: action.payload.sort((firstComment, secondComment) => (new Date(secondComment.date) - new Date(firstComment.date))).slice(0, 10)
      });

    case ActionType.LOAD_OFFERS_NEARBY:
      return extend(state, {
        offersNearby: action.payload,
      });

    case ActionType.UPDATE_FAVORITE_OFFER:
      return extend(state, {
        offerListByCity: replaceItem(state.offerListByCity, action.payload).map((offer) => adaptData(offer)),
        offersNearby: replaceItem(state.offersNearby, action.payload).map((offer) => adaptData(offer)).slice(0, 3),
        favoritesOffers: state.favoritesOffers.slice(0).filter((offer) => offer.id !== action.payload.id),
      });

    case ActionType.LOAD_FAVORITES:
      return extend(state, {
        favoritesOffers: action.payload,
      });
  }

  return state;
};

export {offerData};


