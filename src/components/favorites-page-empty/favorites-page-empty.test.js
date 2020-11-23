import React from "react";
import renderer from "react-test-renderer";
import FavoritesPageEmpty from "../favorites-page-empty/favorites-page-empty";

it(`Should FavoritesPageEmpty render correctly`, () => {
  const tree = renderer
     .create(<FavoritesPageEmpty
     />)
     .toJSON();

  expect(tree).toMatchSnapshot();
});
