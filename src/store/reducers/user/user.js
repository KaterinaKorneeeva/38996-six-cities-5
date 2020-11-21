import {AuthorizationStatus} from "../../../const";
import {ActionType} from "../../action";

const initialState = {
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  userInfo: {email: `Oliver.conner@.com`},
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.REQUIRED_AUTHORIZATION:
      return Object.assign({}, state, {
        authorizationStatus: action.payload,
      });

    case ActionType.UPDATE_USER:
      return Object.assign({}, state, {
        userInfo: action.payload
      });
  }

  return state;
};

export {user};
