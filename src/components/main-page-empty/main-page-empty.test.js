import React from "react";
import renderer from "react-test-renderer";
import MainPageEmpty from "./main-page-empty";

it(`Should MainPageEmpty render correctly`, () => {
  const tree = renderer
     .create(<MainPageEmpty
       city = "Amsterdam"
     />)
     .toJSON();

  expect(tree).toMatchSnapshot();
});
