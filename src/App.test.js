import { render, screen, fireEvent,waitFor } from '@testing-library/react';
import App from './App';
import { createMemoryHistory } from 'history'
import React from 'react'
import { Router } from 'react-router-dom'
import ContactContextProvider from './context';

test('check results bu paging id', async() => {
  const history = createMemoryHistory();
  render(
    <Router history={history}>
      <ContactContextProvider>
        <App />
      </ContactContextProvider>
    </Router>,
  )
  // grab the input and run a search
  const placeHolder = screen.getByPlaceholderText('Enter repository name and click the search icon');
  fireEvent.change(placeHolder, { target: { value: 'react' } })
  const btn = screen.getByTestId('searchButton');
  fireEvent.click(btn);
  //should see the paging control once the fetch finishes
  await (waitFor
    (() => expect(screen.getByTestId('paging')).toBeInTheDocument(),{timeout:3000}));
});

test('paging should be missing on invalid search', async() => {
  const history = createMemoryHistory();
  render(
    <Router history={history}>
      <ContactContextProvider>
        <App />
      </ContactContextProvider>
    </Router>,
  )
  // grab the input and run a search
  const placeHolder = screen.getByPlaceholderText('Enter repository name and click the search icon');
  fireEvent.change(placeHolder, { target: { value: 'somesearchtermthatisgonnanotfindresults' } })
  const btn = screen.getByTestId('searchButton');
  fireEvent.click(btn);
  //should see the paging control once the fetch finishes
  await (waitFor
    (() => expect(screen.queryByTestId('paging')).not.toBeInTheDocument(),{timeout:3000}));
});

test('Search refine shoud be present', async() => {
  const history = createMemoryHistory();
  render(
    <Router history={history}>
      <ContactContextProvider>
        <App />
      </ContactContextProvider>
    </Router>,
  )
  // grab the input and run a search
  const placeHolder = screen.getByPlaceholderText('Enter repository name and click the search icon');
  fireEvent.change(placeHolder, { target: { value: 'react' } })
  const btn = screen.getByTestId('searchButton');
  fireEvent.click(btn);
  //should see the paging control once the fetch finishes
  await (waitFor
    (() => expect(screen.getByTestId('sortResults')).toBeInTheDocument(),{timeout:3000}));
});

test('Search refine should NOT be present', async() => {
  const history = createMemoryHistory();
  render(
    <Router history={history}>
      <ContactContextProvider>
        <App />
      </ContactContextProvider>
    </Router>,
  )
  // grab the input and run a search
  const placeHolder = screen.getByPlaceholderText('Enter repository name and click the search icon');
  fireEvent.change(placeHolder, { target: { value: 'refdsgddsfgsdfgsdfgdfgdfgdfsact' } })
  const btn = screen.getByTestId('searchButton');
  fireEvent.click(btn);
  //should see the paging control once the fetch finishes
  await (waitFor
    (() => expect(screen.queryByTestId('sortResults')).not.toBeInTheDocument(),{timeout:3000}));
});