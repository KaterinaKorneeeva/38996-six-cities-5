import {loadOffers, requireAuthorization} from "./action";
import {AuthorizationStatus} from "../const";
import {adaptData} from "../offers";

export const fetchHotelList = () => (dispatch, _getState, api) => (
  api.get(`/hotels`)
    .then(({data}) => {
      const adaptOffers = data.map((offer) => adaptData(offer));
      dispatch(loadOffers(adaptOffers));
    })
);

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(`/login`)
    .then(() => dispatch(requireAuthorization(AuthorizationStatus.AUTH)))
    .catch((err) => {
      throw err;
    })
);

export const login = ({login: email, password}) => (dispatch, _getState, api) => (
  api.post(`/login`, {email, password})
    .then(() => dispatch(requireAuthorization(AuthorizationStatus.AUTH)))
);
