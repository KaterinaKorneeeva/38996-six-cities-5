import React from "react";
import renderer from "react-test-renderer";
import {FavoritesList} from "./favorites-list";
import {offerList} from "./../../mocks/mocks";

it(`Should FavoritesList render correctly`, () => {
  const city = `Amsterdam`;
  const tree = renderer
    .create(<FavoritesList
      city = {city}
      favoriteOffersInCity = {offerList}
    />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
