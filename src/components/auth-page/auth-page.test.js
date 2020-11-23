import React from "react";
import renderer from "react-test-renderer";
import {AuthPage} from "./auth-page";

it(`Should AuthPage render correctly`, () => {
  const noop = () => {};
  const tree = renderer
    .create(<AuthPage
      onSubmit = {noop}
      selectedCity = 'Paris'
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
