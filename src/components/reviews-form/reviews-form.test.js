import React from "react";
import renderer from "react-test-renderer";
import {ReviewsForm} from "../reviews-form/reviews-form";

it(`Should ReviewsForm render correctly`, () => {
  const id = 2;
  const noop = () => {};
  const tree = renderer
     .create(<ReviewsForm
       handleSubmit = {noop}
       onSubmit = {noop}
       handleFieldChange = {noop}
       comment = {``}
       offerIdActive = {id}
       rating = {`2`}
     />)
     .toJSON();

  expect(tree).toMatchSnapshot();
});
