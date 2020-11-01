import {offersByCity} from "../offers";
import offers from "../mocks/offers";

export const ActionType = {
  TOGGLE_CITY: `TOGGLE_CITY`,
  GET_OFFERS: `GET_OFFERS`,
};

// export const ActionCreator = {

//   toggleCity: (selectedCity) => {
//     return {
//       type: ActionType.TOGGLE_CITY,
//       city: selectedCity,
//       offerList: offersByCity(selectedCity, offers)
//     };
//   },
// };


export const toggleCity = (selectedCity) => ({
  type: ActionType.TOGGLE_CITY,
  city: selectedCity,
  offerList: offersByCity(selectedCity, offers)
});
