import React from "react";
import renderer from "react-test-renderer";
import ReviewsList from "../reviews_list/reviews_list";
import {comments} from "./../../mocks/mocks";

it(`Should ReviewsList render correctly`, () => {
  const tree = renderer
     .create(<ReviewsList
       reviews = {comments}
     />)
     .toJSON();

  expect(tree).toMatchSnapshot();
});
