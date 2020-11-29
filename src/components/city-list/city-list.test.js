import React from "react";
import renderer from "react-test-renderer";
import CityList from "./city-list";

it(`Should CityList render correctly`, () => {
  const noop = () => {};
  const selectedCity = `Paris`;
  const tree = renderer
    .create(<CityList
      selectedCity = {selectedCity}
      toggleCity = {noop}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
