// import offers from "../mocks/offers";
import {offersByCity} from "../offers";

export const ActionType = {
  TOGGLE_CITY: `TOGGLE_CITY`,
  GET_OFFERS: `GET_OFFERS`,
  REQUIRED_AUTHORIZATION: `REQUIRED_AUTHORIZATION`,
  LOAD_OFFERS: 'LOAD_OFFERS',
  UPDATE_SORTING_TYPE: `UPDATE_SORTING_TYPE`,
  SORT_LOW_TO_HIGH: `SORT_LOW_TO_HIGH`,
  SORT_HIGH_TO_LOW: `SORT_HIGH_TO_LOW`,
  SORT_POPULAR: `SORT_POPULAR`,
  SORT_TOP_RATED: `SORT_TOP_RATED`,
  UPDATE_OFFER_ID_ACTIVE: `UPDATE_OFFER_ID_ACTIVE`,
};

export const toggleCity = (selectedCity) => ({
  type: ActionType.TOGGLE_CITY,
  payload: selectedCity,
});


export const loadOffers = (offers) => ({
  type: ActionType.LOAD_OFFERS,
  payload: offers,
});

export const requireAuthorization = (status) => ({
  type: ActionType.REQUIRED_AUTHORIZATION,
  payload: status,
});

export const updateSortingType = (sortingType) => ({
    type: ActionType.UPDATE_SORTING_TYPE,
    payload: sortingType,
  });

  export const  sortLowToHigh = () => ({
    type: ActionType.SORT_LOW_TO_HIGH,
  });
  export const  sortHighToLow= () => ({

    type: ActionType.SORT_HIGH_TO_LOW,
  });
 export const  sortPopular= () => ({

    type: ActionType.SORT_POPULAR,
  });
  export const  sortTopRated= () => ({

    type: ActionType.SORT_TOP_RATED,
  });
export const updateActiveOfferId = (offerIdActive) => ({
  type: ActionType.UPDATE_OFFER_ID_ACTIVE,
  offerIdActive,
});
