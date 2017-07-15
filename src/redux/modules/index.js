// @flow

import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import type { RouterState } from '../../types/router';

export type ReduxState = {
  router: RouterState,
};

export type ReduxActions = any;

export default combineReducers({
  router: routerReducer,
});
