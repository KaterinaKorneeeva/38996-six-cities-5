import React from "react";
import renderer from "react-test-renderer";
import {App} from "./app";
import {offerList} from "./../../mocks/mocks";

import {MemoryRouter} from "react-router-dom";
import configureStore from "redux-mock-store";
import {AuthorizationStatus} from "../../const";
import {Provider} from "react-redux";

const mockStore = configureStore()({
  USER: {
    authorizationStatus: AuthorizationStatus.AUTH,
    userInfo: {
      email: `email@mail.ru`
    }
  }
});

it(`Should AuthPage render correctly`, () => {
  const authorizationStatus = `AUTH`;
  const tree = renderer
    .create(
        <Provider store={mockStore}>
          <MemoryRouter>
            <App
              offerList = {offerList}
              authorizationStatus = {authorizationStatus}
              selectedCity = 'Paris'
            />
          </MemoryRouter>
        </Provider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
