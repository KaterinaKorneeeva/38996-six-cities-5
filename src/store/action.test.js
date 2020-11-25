import {
  toggleCity,
  loadOffers,
  requireAuthorization,
  updateUser,
  updateFavoriteOffer,
  loadFavorites,
  updateSortingType,
  updateActiveOfferId,
  redirectToRoute,
  loadComments,
  loadOffersNearby,

  ActionType,
} from "./action";

import {offerList, userInfo, comments} from "../mocks/mocks";

describe(`Action creators work correctly`, () => {
  it(`Action creator for toggle city`, () => {
    expect(toggleCity(`Amsterdam`)).toEqual({
      type: ActionType.TOGGLE_CITY,
      payload: `Amsterdam`,
    });
  });

  it(`Action creator for loadOffers`, () => {
    expect(loadOffers(offerList)).toEqual({
      type: ActionType.LOAD_OFFERS,
      payload: offerList,
    });
  });

  it(`Action creator for requireAuthorization`, () => {
    expect(requireAuthorization(`AUTH`)).toEqual({
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: `AUTH`,
    });
  });

  it(`Action creator for updateUser`, () => {
    expect(updateUser(userInfo)).toEqual({
      type: ActionType.UPDATE_USER,
      payload: userInfo,
    });
  });

  it(`Action creator for updateFavoriteOffer`, () => {
    expect(updateFavoriteOffer(offerList[0])).toEqual({
      type: ActionType.UPDATE_FAVORITE_OFFER,
      payload: offerList[0],
    });
  });

  it(`Action creator for loadFavorites`, () => {
    expect(loadFavorites(offerList)).toEqual({
      type: ActionType.LOAD_FAVORITES,
      payload: offerList,
    });
  });

  it(`Action creator for loadFavorites`, () => {
    expect(loadFavorites(offerList)).toEqual({
      type: ActionType.LOAD_FAVORITES,
      payload: offerList,
    });
  });

  it(`Action creator for updateSortingType`, () => {
    expect(updateSortingType(`POPULAR`)).toEqual({
      type: ActionType.UPDATE_SORTING_TYPE,
      payload: `POPULAR`,
    });
  });

  it(`Action creator for updateActiveOfferId`, () => {
    expect(updateActiveOfferId(1)).toEqual({
      type: ActionType.UPDATE_OFFER_ID_ACTIVE,
      payload: 1,
    });
  });

  it(`Action creator for updateActiveOfferId`, () => {
    expect(redirectToRoute(`url`)).toEqual({
      type: ActionType.REDIRECT_TO_ROUTE,
      payload: `url`,
    });
  });

  it(`Action creator for loadComments`, () => {
    expect(loadComments(comments)).toEqual({
      type: ActionType.LOAD_COMMENTS,
      payload: comments,
    });
  });

  it(`Action creator for loadOffersNearby`, () => {
    expect(loadOffersNearby(offerList)).toEqual({
      type: ActionType.LOAD_OFFERS_NEARBY,
      payload: offerList,
    });
  });

});
