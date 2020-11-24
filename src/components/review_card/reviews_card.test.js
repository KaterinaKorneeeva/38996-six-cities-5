import React from "react";
import renderer from "react-test-renderer";
import ReviewCard from "../review_card/review_card";
import {comments} from "../../mocks/mocks";

it(`Should ReviewCard render correctly`, () => {
  const id = 1;
  const tree = renderer
     .create(<ReviewCard
       review = {comments[0]}
       id = {id}
     />)
     .toJSON();

  expect(tree).toMatchSnapshot();
});
