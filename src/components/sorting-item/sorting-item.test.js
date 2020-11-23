import React from "react";
import renderer from "react-test-renderer";
import SortingItem from "./sorting-item";

it(`Should SortingItem render correctly`, () => {
  const noop = () => {};
  const itemName = `Popular`;
  const isActive = false;
  const tree = renderer
     .create(<SortingItem
       itemName = {itemName}
       isActive={isActive}
       onSortingItemClick={noop}
     />)
     .toJSON();
  expect(tree).toMatchSnapshot();
});
