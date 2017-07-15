// @flow

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import { injectGlobal } from 'styled-components';

import 'normalize.css/normalize.css';

import configureStore from './redux/configureStore';
import registerServiceWorker from './registerServiceWorker';

import App from './App';

const history = createHistory();
const store = configureStore(undefined, history);

// eslint-disable-next-line
injectGlobal`
  body {
    margin: 0;
    padding: 0;
    background: #efefef;
    font-family: 'Source Sans Pro', sans-serif;
    color: #555;
    font-size: 16px;
    line-height: 1.5;
  }
`;

const render = Component => {
  ReactDOM.render(
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Component />
      </ConnectedRouter>
    </Provider>,
    document.getElementById('root'),
  );
};

/* istanbul ignore if */
if (process.env.NODE_ENV === 'development' && module.hot) {
  module.hot.accept('./App', () => {
    // eslint-disable-next-line
    const NextApp = require('./App').default;
    render(NextApp);
  });
}

render(App);
registerServiceWorker();
