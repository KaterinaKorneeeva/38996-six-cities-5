import {offersByCity} from "../offers";
import offers from "../mocks/offers";

export const ActionType = {
  TOGGLE_CITY: `TOGGLE_CITY`,
  GET_OFFERS: `GET_OFFERS`,
  UPDATE_SORTING_TYPE: `UPDATE_SORTING_TYPE`,
  SORT_LOW_TO_HIGH: `SORT_LOW_TO_HIGH`,
  SORT_HIGH_TO_LOW: `SORT_HIGH_TO_LOW`,
  SORT_POPULAR: `SORT_POPULAR`,
  SORT_TOP_RATED: `SORT_TOP_RATED`,
};

export const ActionCreator = {

  toggleCity: (selectedCity) => {
    return {
      type: ActionType.TOGGLE_CITY,
      city: selectedCity,
      offerList: offersByCity(selectedCity, offers)
    };
  },

  updateSortingType: (sortingType) => {
    return {
      type: ActionType.UPDATE_SORTING_TYPE,
      sortingType,
    };
  },

  sortLowToHigh: () => {
    return {
      type: ActionType.SORT_LOW_TO_HIGH,
    };
  },
  sortHighToLow: () => {
    return {
      type: ActionType.SORT_HIGH_TO_LOW,
    };
  },
  sortPopular: () => {
    return {
      type: ActionType.SORT_POPULAR,
    };
  },
  sortTopRated: () => {
    return {
      type: ActionType.SORT_TOP_RATED,
    };
  },
};
