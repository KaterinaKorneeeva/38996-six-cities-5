import {extend} from "../../../utils";
import {ActionType} from "../../action";
import {offersByCity, adaptData, getIndex, getNewArray} from "../../../offers";


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

    case ActionType.UPDATE_FAVORITE_OFFER:
      const result = [];

      let index = getIndex(action.payload, state.offerListByCity);
      if (index !== -1) {
        const adaptOffers = getNewArray(action.payload, state.offerListByCity, index).map((offer) => adaptData(offer));
        result.offerListByCity = adaptOffers;
      }

      if (state.offerIdActive === action.payload.id) {
        result.offer = adaptData(action.payload);
      }

      index = getIndex(action.payload, state.offersNearby);
      if (index !== -1) {
        const adaptOffersNearby = getNewArray(action.payload, state.offersNearby, index).map((offer) => adaptData(offer)).slice(0, 3);
        result.offersNearby = adaptOffersNearby;
      }

      result.favoritesOffers = state.favoritesOffers.slice(0).filter((offer) => offer.id !== action.payload.id);
      return extend(state, result);

    case ActionType.LOAD_FAVORITES:
      return extend(state, {
        favoritesOffers: action.payload,
      });
  }

  return state;
};

export {offerData};


