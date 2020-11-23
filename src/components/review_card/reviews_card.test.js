import React from "react";
import renderer from "react-test-renderer";
import ReviewCard from "../review_card/review_card";
import {comments} from "../../mocks/mocks";

it(`Should ReviewCard render correctly`, () => {
  const tree = renderer
     .create(<ReviewCard
       review = {comments[0]}
       id = {`1`}
     />)
     .toJSON();

  expect(tree).toMatchSnapshot();
});
