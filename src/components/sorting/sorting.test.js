import React from "react";
import renderer from "react-test-renderer";
import {Sorting} from "../sorting/sorting";

it(`Should ReviewsForm render correctly`, () => {
  const noop = () => {};
  const tree = renderer
     .create(<Sorting
       updateSortingTypeAction = {noop}
       sortPopularAction = {noop}
       sortLowToHighAction = {noop}
       sortHighToLowAction = {noop}
       sortTopRatedAction = {noop}
       activeItem = {`Popular`}
     />)
     .toJSON();

  expect(tree).toMatchSnapshot();
});
