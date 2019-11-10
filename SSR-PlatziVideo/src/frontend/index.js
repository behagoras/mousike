import React from 'react';
import { hydrate } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, compose } from 'redux';
import { Router } from 'react-router';
import { createBrowserHistory } from 'history';
import reducer from './reducers';
import App from './routes/App';
import { MusicPlayer } from './components/2/MusicPlayer/MusicPlayer';

if (typeof window !== 'undefined') {
  let composeEnhacers;
  if (process.env.NODE_ENV === 'production') composeEnhacers = compose;
  else composeEnhacers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const preloadedState = window.__PRELOADED_STATE__;
  const store = createStore(reducer, preloadedState, composeEnhacers());
  const history = createBrowserHistory();

  hydrate(
    <Provider store={store}>
      <Router history={history}>
        <App />
        <MusicPlayer />
      </Router>
    </Provider>,
    document.getElementById('app'),
  );
}
