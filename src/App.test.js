import { render, screen, fireEvent,waitFor } from '@testing-library/react';
import App from './App';
import userEvent from '@testing-library/user-event'
import { createMemoryHistory } from 'history'
import React from 'react'
import { Router } from 'react-router-dom'
import ContactContextProvider from './context';

test('app route rendering', async() => {
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