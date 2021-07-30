import './App.css';
import SearchBar from './components/SearchBar';
import React from 'react';
import Main from './components/Main';
import Details from './components/Details'
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ErrorBoundary } from 'react-error-boundary';
import ErrorFallback from './ErrorHandling';

export default function App() {
  return (
    <BrowserRouter>
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <header>
            <SearchBar />
          </header>
          <Switch>
            <Route path="/" exact component={Main} />
            <Route path="/details" component={Details} />
          </Switch>
          <footer>Footer</footer>
        </ErrorBoundary>
    </BrowserRouter>
  );
}
