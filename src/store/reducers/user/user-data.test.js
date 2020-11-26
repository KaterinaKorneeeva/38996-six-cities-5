import MockAdapter from "axios-mock-adapter";
import {createAPI} from "../../../services/api";
import {user} from "./user";
import {ActionType} from "../../action";
import {checkAuth} from "../../api-actions";
import {APIRoute} from "../../../const";
import {AuthorizationStatus} from "../../../const";

const api = createAPI(() => {});

it(`Reducer without additional parameters should return initial state`, () => {
  expect(user(void 0, {})).toEqual({
    authorizationStatus: AuthorizationStatus.NO_AUTH,
    userInfo: {email: `Oliver.conner@.com`}
  });
});

it(`Reducer should update authorizationStatus to "auth"`, () => {
  expect(user({
    authorizationStatus: AuthorizationStatus.NO_AUTH,
  }, {
    type: ActionType.REQUIRED_AUTHORIZATION,
    payload: AuthorizationStatus.AUTH
  })).toEqual({
    authorizationStatus: AuthorizationStatus.AUTH
  });
});

describe(`Async operation work correctly`, () => {
  it(`Should make a correct API call to /login`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const offerLoader = checkAuth();

    apiMock
      .onGet(APIRoute.LOGIN)
      .reply(200, [{fake: true}]);

    return offerLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.REQUIRED_AUTHORIZATION,
          payload: AuthorizationStatus.AUTH,
        });
      });
  });

});
