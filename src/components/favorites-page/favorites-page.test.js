import React from "react";
import renderer from "react-test-renderer";
import {FavoritesPage} from "../favorites-page/favorites-page";
import {offerList} from "./../../mocks/mocks";

it(`Should FavoritesPage render correctly`, () => {
  const noop = () => {};
  const tree = renderer
    .create(<FavoritesPage
      loadFavorites = {noop}
      favoritesOffers = {offerList}
    />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
