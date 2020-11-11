import {toggleCity, requireAuthorization} from "./action";
import {AuthorizationStatus} from "../const";

export const fetchHotelList = () => (dispatch, _getState, api) => (

  api.get(`/hotels`)
    .then(({data}) => dispatch(toggleCity(data)))
    // .then(({data}) => dispatch(loadOffers(data)))
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
