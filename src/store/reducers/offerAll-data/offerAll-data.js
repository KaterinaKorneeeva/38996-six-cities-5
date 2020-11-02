import {extend} from "../../../utils";
import {ActionType} from "../../action";
import {offersByCity} from "../../../offers";
import offers from "../../../mocks/offers";

const initialState = {
  city: `Paris`,
  // offerList: offersByCity(`Paris`, offers),
  offerList:[],
  offerId: 1
};



const offerData = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.GET_OFFERS:
      return extend(state, {
        city: action.city,
        offerList: action.offerList,
      });
  }

  return state;
};

export {offerData};


