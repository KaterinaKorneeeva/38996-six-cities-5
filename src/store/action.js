export const ActionType = {
  TOGGLE_CITY: `TOGGLE_CITY`,
  GET_OFFERS: `GET_OFFERS`,
  REQUIRED_AUTHORIZATION: `REQUIRED_AUTHORIZATION`,
  LOAD_OFFERS: `LOAD_OFFERS`,
  UPDATE_SORTING_TYPE: `UPDATE_SORTING_TYPE`,
  SORT_LOW_TO_HIGH: `SORT_LOW_TO_HIGH`,
  SORT_HIGH_TO_LOW: `SORT_HIGH_TO_LOW`,
  SORT_POPULAR: `SORT_POPULAR`,
  SORT_TOP_RATED: `SORT_TOP_RATED`,
  UPDATE_OFFER_ID_ACTIVE: `UPDATE_OFFER_ID_ACTIVE`,
  LOAD_OFFER: `LOAD_OFFER`,
  REDIRECT_TO_ROUTE: `REDIRECT_TO_ROUTE`,
  LOAD_COMMENTS: `LOAD_COMMENTS`,
  UPDATE_USER: `UPDATE_USER`,
  LOAD_OFFERS_NEARBY: `LOAD_OFFERS_NEARBY`,
  UPDATE_FAVORITE_OFFER: `UPDATE_FAVORITE_OFFER`,
  LOAD_FAVORITES: `LOAD_FAVORITES`,
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

export const updateUser = (userInfo) => ({
  type: ActionType.UPDATE_USER,
  payload: userInfo
});

export const updateFavoriteOffer = (favoriteInfo) => ({
  type: ActionType.UPDATE_FAVORITE_OFFER,
  payload: favoriteInfo
});

export const loadFavorites = (favoritesOffers) => ({
  type: ActionType.LOAD_FAVORITES,
  payload: favoritesOffers,
});

export const updateSortingType = (sortingType) => ({
  type: ActionType.UPDATE_SORTING_TYPE,
  payload: sortingType,
});

export const sortLowToHigh = () => ({
  type: ActionType.SORT_LOW_TO_HIGH,
});
export const sortHighToLow = () => ({

  type: ActionType.SORT_HIGH_TO_LOW,
});
export const sortPopular = () => ({

  type: ActionType.SORT_POPULAR,
});
export const sortTopRated = () => ({

  type: ActionType.SORT_TOP_RATED,
});

export const updateActiveOfferId = (offerIdActive) => ({
  type: ActionType.UPDATE_OFFER_ID_ACTIVE,
  payload: offerIdActive,
});

export const updateOffer = (offer) => ({
  type: ActionType.UPDATE_OFFER,
  payload: offer,
});


export const redirectToRoute = (url) => ({
  type: ActionType.REDIRECT_TO_ROUTE,
  payload: url,
});

export const loadComments = (comments) => ({
  type: ActionType.LOAD_COMMENTS,
  payload: comments,
});

export const loadOffersNearby = (offersNearby) => ({
  type: ActionType.LOAD_OFFERS_NEARBY,
  payload: offersNearby,
});

export const loadOfferById = (offerTest) => ({
  type: ActionType.LOAD_OFFER,
  payload: offerTest,
});
