// @flow

import rootReducer from '../../../redux/modules/index';

describe('root reducer', () => {
  it('should have proper properties', () => {
    const reducer = rootReducer();

    expect(reducer).toHaveProperty('router');
  });
});
