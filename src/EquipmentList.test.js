import React from 'react';
import renderer from 'react-test-renderer';
import EquipmentList from './EquipmentList';
import CATEGORIES from './index';

test('Renders EquipmentList', () => {
  const component = renderer.create(<EquipmentList category={CATEGORIES[0]}></EquipmentList>,);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});