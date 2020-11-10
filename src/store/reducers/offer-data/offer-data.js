import {extend} from "../../../utils";
import {ActionType} from "../../action";
import {offersByCity} from "../../../offers";
import offers from "../../../mocks/offers";

const initialState = {
  selectedCity: `Paris`,
  // offerList: offersByCity(`Paris`, offers),
  offerList:[],
  offerId: 1,
  offerListByCity: [],
};



const offerData = (state = initialState, action) => {
  console.log(' action.selectedCity,', state.selectedCity);
  switch (action.type) {
    case ActionType.TOGGLE_CITY:
      return extend(state, {
        selectedCity: action.selectedCity,
        // selectedCity: action.selectedCity,
        offerList: action.offerList,
        offerListByCity: action.offerListByCity,
      });
  }

  return state;
};

export {offerData};


