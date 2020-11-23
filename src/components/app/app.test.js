import React from "react";
import renderer from "react-test-renderer";
import {App} from "./app";
import {offerList} from "./../../mocks/mocks";


it(`Should AuthPage render correctly`, () => {
  const authorizationStatus = `AUTH`;
  const tree = renderer
    .create(<App
      offerList = {offerList}
      authorizationStatus = {authorizationStatus}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
