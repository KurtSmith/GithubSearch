import React from 'react';
import renderer from 'react-test-renderer';
import SearchBar from './index';
import ContactContextProvider from '../../context';

test('searchbar input length', () => {
  const component = renderer.create(
    <ContactContextProvider>
    <SearchBar/>
    </ContactContextProvider>,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree.children.find(item=> item.type==='input').props.maxLength).toEqual('50');

});