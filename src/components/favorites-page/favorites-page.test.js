import React from "react";
import renderer from "react-test-renderer";
import {FavoritesPage} from "../favorites-page/favorites-page";
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

it(`Should FavoritesPage render correctly`, () => {
  const noop = () => {};
  const tree = renderer
    .create(
        <Provider store={mockStore}>
          <MemoryRouter>
            <FavoritesPage
              loadFavorites = {noop}
              handleLoginClick ={noop}
              handleFavoriteClick = {noop}
              favoritesOffers = {offerList}
            />
          </MemoryRouter>
        </Provider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
