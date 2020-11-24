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
  },
  DATA: {
    offerList,
    offerListByCity: offerList,
    selectedCity: `Amsterdam`,
    sortingType: `Popular`
  }
});
jest.mock(`../map/map`, () => `Map`);

it(`Should App render correctly`, () => {
  const tree = renderer
    .create(
        <Provider store={mockStore}>
          <MemoryRouter>
            <App
              authorizationStatus = {AuthorizationStatus.AUTH}
              offerList = {offerList}
            />
          </MemoryRouter>
        </Provider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
