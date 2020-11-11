import {extend} from "../../../utils";
import {ActionType} from "../../action";
import {offersByCity, offerById} from "../../../offers";
import offers from "../../../mocks/offers";

const initialState = {
  selectedCity: `Paris`,
  // offerList: offersByCity(`Paris`, offers),
  offerList:[],
  offer:[],
  offerId: 6,
  offerListByCity: [],
  sortingType: `POPULAR`,
  offerIdActive: 0,
};



const offerData = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.TOGGLE_CITY:
      return extend(state, {
        selectedCity: action.selectedCity,
        offerList: offersByCity(action.offerList, `Paris`),
        offer:  offerById(action.offerList, 6),
        offerListByCity: action.offerListByCity,
      });

      case ActionType.LOAD_OFFERS:
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
      case ActionType.UPDATE_OFFER_ID_ACTIVE:
        return extend(state, {
          offerIdActive: action.offerIdActive,
        });
  }

  return state;
};





export {offerData};


