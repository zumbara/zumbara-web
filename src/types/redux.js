// @flow

import type { Store, Dispatch } from 'redux';

import type { ReduxState, ReduxActions } from '../redux/modules';

export type ReduxStore = Store<ReduxState, ReduxActions>;
export type ReduxDispatch = Dispatch<ReduxActions>;
