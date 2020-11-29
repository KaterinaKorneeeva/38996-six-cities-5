import {loadOffers, requireAuthorization, redirectToRoute, updateUser, loadComments, loadOffersNearby, updateFavoriteOffer, loadFavorites, loadOfferById} from "./action";
import {adaptData, adaptCommentData} from "../offers";
import {AuthorizationStatus, AppRoute, APIRoute} from "../const";

export const fetchHotelList = () => (dispatch, _getState, api) => (
  api.get(APIRoute.HOTELS)
    .then(({data}) => {
      const adaptOffers = data.map((offer) => adaptData(offer));
      dispatch(loadOffers(adaptOffers));
    })
);

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(APIRoute.LOGIN)
    .then(() => dispatch(requireAuthorization(AuthorizationStatus.AUTH)))
    .catch((err) => {
      throw err;
    })
);

export const login = ({login: email, password}) => (dispatch, _getState, api) => (
  api.post(APIRoute.LOGIN, {email, password})
    .then(({data}) => {
      dispatch(requireAuthorization(AuthorizationStatus.AUTH));
      dispatch(updateUser(data));
      dispatch(redirectToRoute(AppRoute.FAVORITES));
    })
);

export const addReview = ({comment: comment, rating, id}) => (dispatch, _getState, api) => (
  api.post(`${APIRoute.COMMENTS}/${id}`, {comment, rating})
    .then(({data}) => {
      const adaptCommnents = data.map((it) => adaptCommentData(it));
      dispatch(loadComments(adaptCommnents));
    })
);

export const getCommentsByHotelId = (id) => (dispatch, _getState, api) => (
  api.get(`${APIRoute.COMMENTS}/${id}`)
    .then(({data}) => {
      const adaptCommnents = data.map((comment) => adaptCommentData(comment));
      dispatch(loadComments(adaptCommnents));
    })
);

export const getHotelsNearby = (id) => (dispatch, _getState, api) => (
  api.get(`hotels/${id}${APIRoute.NEARBY}`)
    .then(({data}) => {
      const adaptOffers = data.map((offer) => adaptData(offer));
      dispatch(loadOffersNearby(adaptOffers));
    })
);

export const getOfferByHotelId = (id) => (dispatch, _getState, api) => (
  api.get(`${APIRoute.HOTELS}/${id}`)
    .then(({data}) => {
      const adaptOffer = adaptData(data);
      console.log('id',id);
      dispatch(loadOfferById(adaptOffer));
    })
);

export const addFavorite = ({status, id}) => (dispatch, _getState, api) => (
  api.post(`favorite/${id}/${status}`)
    .then(({data}) => {
      dispatch(updateFavoriteOffer(data));
    })
);

export const getFavoritesOffers = () => (dispatch, _getState, api) => (
  api.get(`/favorite`)
    .then(({data}) => {
      const adaptOffers = data.map((offer) => adaptData(offer));
      dispatch(loadFavorites(adaptOffers));
    })
);
