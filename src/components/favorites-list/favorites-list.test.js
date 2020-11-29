import React from "react";
import renderer from "react-test-renderer";
import FavoritesList from "./favorites-list";
import {offerList} from "./../../mocks/mocks";

import {MemoryRouter} from "react-router-dom";
import configureStore from "redux-mock-store";
import {AuthorizationStatus} from "../../const";
import {Provider} from "react-redux";

const mockStore = configureStore()({
  USER: {
    authorizationStatus: AuthorizationStatus.AUTH
  }
});

it(`Should FavoritesList render correctly`, () => {
  const noop = () => {};
  const city = `Amsterdam`;
  const tree = renderer
    .create(
        <Provider store={mockStore}>
          <MemoryRouter>
            <FavoritesList
              city = {city}
              onOfferCardHover = {noop}
              handleFavoriteClick = {noop}
              favoriteOffersInCity = {offerList}
            />
          </MemoryRouter>
        </Provider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
