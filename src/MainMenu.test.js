import React from 'react';
import renderer from 'react-test-renderer';
import MainMenu from './MainMenu';
import CATEGORIES from './index';

test('Renders MainMenu', () => {
  const component = renderer.create(<MainMenu categories={CATEGORIES}></MainMenu>,);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});